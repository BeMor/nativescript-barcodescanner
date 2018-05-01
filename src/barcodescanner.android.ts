import { BarcodeScannerView as BarcodeScannerBaseView, ScanOptions, ScanResult } from "./barcodescanner-common";
import { AndroidActivityRequestPermissionsEventData} from "tns-core-modules/application";
import * as appModule from "tns-core-modules/application"
import * as utils from "tns-core-modules/utils/utils";
import * as labelModule from "tns-core-modules/ui/label";

let SCANNER_REQUEST_CODE = 444;

declare let com, android: any;

let _onScanReceivedCallback = undefined;
let _onContinuousScanResult = undefined;


export class BarcodeScannerView extends BarcodeScannerBaseView {

  private _reader: me.dm7.barcodescanner.zxing.ZXingScannerView;
  private _hasSupport;
  private _lastScanText = "";

  constructor() {
    super();
  }

  createNativeView(): Object {
    let v = super.createNativeView();
    this.initView();
    return v;
  }

  disposeNativeView(): void {
    console.log("Dispose nativeview");
    appModule.android.off(appModule.AndroidApplication.activityRequestPermissionsEvent);
    this.stopScanning();
  }


  startScanning() {
    this.addActivityListeners();
    this._startScanning();
  }

  private _startScanning() {
    const that = this;
    this._reader.resumeCameraPreview(new me.dm7.barcodescanner.zxing.ZXingScannerView.ResultHandler({
      handleResult: function (rawResult: any){
        if(that._lastScanText !== rawResult.getText() || that.reportDuplicates) {
          that.notify({
            eventName: BarcodeScannerBaseView.scanResultEvent,
            object: that,
            format: rawResult.getBarcodeFormat(),
            text: rawResult.getText()
          });
          that._lastScanText = rawResult.getText();
        }
        setTimeout(() => {
          that.startScanning();
        }, 500);
      }
    }));
    this._reader.startCamera();
  }
  stopScanning() {
    this.removeActivityListeners();
    this._stopScanning();
  }
  private _stopScanning() {
    this._reader.stopCamera();
  }
  private removeActivityListeners() {
    appModule.android.off(appModule.AndroidApplication.activityPausedEvent);
    appModule.android.off(appModule.AndroidApplication.activityResumedEvent);
  }
  private addActivityListeners() {
    this.removeActivityListeners();
    appModule.android.on(appModule.AndroidApplication.activityPausedEvent, () => {
      console.log("Activity paused")
      this._stopScanning();
    });
    appModule.android.on(appModule.AndroidApplication.activityResumedEvent, () => {
      console.log("Activity resumed")
      this._startScanning();
    });
  }
  initView() {
    appModule.android.on(appModule.AndroidApplication.activityRequestPermissionsEvent, (args: AndroidActivityRequestPermissionsEventData) => {
      for (let i = 0; i < args.permissions.length; i++) {
        if (args.grantResults[i] === android.content.pm.PackageManager.PERMISSION_DENIED) {
          console.log("Please allow access to the Camera and try again.");
          return;
        }
      }
      this.startScanning();
      this.notify({
        eventName: BarcodeScannerBaseView.scanStartedEvent,
        object: this
      });
    });
    setTimeout(() => {
      this._reader = new me.dm7.barcodescanner.zxing.ZXingScannerView(appModule.android.foregroundActivity);
      this._reader.setBorderColor(this.scannerBorderColor);
      this._reader.setBorderStrokeWidth(this.scannerBorderWidth);
      this._reader.setBorderAlpha(this.scannerBorderAlpha);
      this._reader.setLaserEnabled(this.laserEnabled);
      this._reader.setLaserColor(this.laserColor);
      let fl: android.view.ViewGroup = this.android;
      fl.addView(<any>this._reader);
      const formats = getBarcodeTypes(this.formats);
      this._reader.setFormats(formats);
      android.support.v4.app.ActivityCompat.requestPermissions(
        appModule.android.foregroundActivity,
        [android.Manifest.permission.CAMERA],
        234 
      )
    }, 100);
  }

  public onLayout(left: number, top: number, right: number, bottom: number): void {
    super.onLayout(left, top, right, bottom);
  }
}

const getBarcodeTypes = (formatsString: string) => {
  if (formatsString) {
    let formats = formatsString.split(",");
    const types = new Array<com.google.zxing.BarcodeFormat>();
    for (let format of formats) {
      format = format.trim();
      if (format === "QR_CODE") types.push(com.google.zxing.BarcodeFormat.QR_CODE);
      else if (format === "PDF_417") types.push(com.google.zxing.BarcodeFormat.PDF_417);
      else if (format === "AZTEC") types.push(com.google.zxing.BarcodeFormat.AZTEC);
      else if (format === "UPC_E") types.push(com.google.zxing.BarcodeFormat.UPC_E);
      else if (format === "CODE_39") types.push(com.google.zxing.BarcodeFormat.CODE_39);
      else if (format === "CODE_39_MOD_43") types.push(com.google.zxing.BarcodeFormat.CODE_39_MOD_43);
      else if (format === "CODE_93") types.push(com.google.zxing.BarcodeFormat.CODE_93);
      else if (format === "CODE_128") types.push(com.google.zxing.BarcodeFormat.CODE_128);
      else if (format === "DATA_MATRIX") types.push(com.google.zxing.BarcodeFormat.DATA_MATRIX);
      else if (format === "EAN_8") types.push(com.google.zxing.BarcodeFormat.EAN_8);
      else if (format === "EAN_13") types.push(com.google.zxing.BarcodeFormat.EAN_13);
      else if (format === "ITF") types.push(com.google.zxing.BarcodeFormat.ITF);
    }
    let formatList = new java.util.ArrayList(java.util.Arrays.asList(formats));
    return formatList;
  }
  return me.dm7.barcodescanner.zxing.ZXingScannerView.ALL_FORMATS;
};


export class BarcodeScanner {
  private broadcastManager: any = null;
  private onPermissionGranted: Function;
  private onPermissionRejected: Function;
  private uniquelyScannedCodes: Array<string> = [];

  constructor() {
    appModule.android.on(appModule.AndroidApplication.activityRequestPermissionsEvent, (args: AndroidActivityRequestPermissionsEventData) => {
      for (let i = 0; i < args.permissions.length; i++) {
        if (args.grantResults[i] === android.content.pm.PackageManager.PERMISSION_DENIED) {
          if (this.onPermissionRejected) {
            this.onPermissionRejected("Please allow access to the Camera and try again.");
          } else {
            console.log("Please allow access to the Camera and try again. (tip: pass in a reject to receive this message in your app)");
          }
          return;
        }
      }

      if (this.onPermissionGranted) {
        this.onPermissionGranted();
      }
    });
  }

  private wasCameraPermissionGranted() {
    let hasPermission = android.os.Build.VERSION.SDK_INT < 23; // Android M. (6.0)
    if (!hasPermission) {
      hasPermission = android.content.pm.PackageManager.PERMISSION_GRANTED ===
        android.support.v4.content.ContextCompat.checkSelfPermission(utils.ad.getApplicationContext(), android.Manifest.permission.CAMERA);
    }
    return hasPermission;
  }

  private requestCameraPermissionInternal(onPermissionGranted, reject) {
    this.onPermissionGranted = onPermissionGranted;
    this.onPermissionRejected = reject;
    android.support.v4.app.ActivityCompat.requestPermissions(
      appModule.android.foregroundActivity,
      [android.Manifest.permission.CAMERA],
      234 // irrelevant since we simply invoke onPermissionGranted
    );
  }

  public available(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        resolve(utils.ad.getApplicationContext().getPackageManager().hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA));
      } catch (ex) {
        console.log("Error in barcodescanner.available: " + ex);
        // let's just assume it's ok
        resolve(true);
      }
    });
  }

  public hasCameraPermission(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(this.wasCameraPermissionGranted());
    });
  }

  public requestCameraPermission(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        this.requestCameraPermissionInternal(resolve, reject);
      } catch (ex) {
        console.log("Error in barcodescanner.requestCameraPermission: " + ex);
        reject(ex);
      }
    });
  }

  public stop(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if (!this.broadcastManager) {
          reject("You found a bug in the plugin, please report that calling stop() failed with this message.");
          return;
        }
        const stopIntent = new android.content.Intent("barcode-scanner-stop");
        this.broadcastManager.sendBroadcast(stopIntent);

        if (_onScanReceivedCallback) {
          this.broadcastManager.unregisterReceiver(_onScanReceivedCallback);
          _onScanReceivedCallback = undefined;
        }
        resolve();
      } catch (ex) {
        reject(ex);
      }
    });
  }

  public scan(arg: ScanOptions): Promise<ScanResult> {
    return new Promise((resolve, reject) => {
      const onPermissionGranted = (): any => {

        this.uniquelyScannedCodes = [];

        // the intent name should match the filter name in AndroidManifest.xml, don't change it
        const intent = new android.content.Intent("com.google.zxing.client.android.SCAN");

        // limit searching for a valid Intent to this package only
        intent.setPackage(appModule.android.context.getPackageName());

        arg = arg || {};

        // shown at the bottom of the scan UI, default is: "Place a barcode inside the viewfinder rectangle to scan it."
        if (arg.message) {
          intent.putExtra("PROMPT_MESSAGE", arg.message);
        }
        /*if (arg.preferFrontCamera === true) {
          // if no front cam is found this will fall back to the back camera
          intent.putExtra(com.google.zxing.client.android.Intents.Scan.CAMERA_ID, 1);
        }
        if (arg.showFlipCameraButton === true) {
          intent.putExtra(com.google.zxing.client.android.Intents.Scan.SHOW_FLIP_CAMERA_BUTTON, true);
        }
        if (arg.showTorchButton === true) {
          intent.putExtra(com.google.zxing.client.android.Intents.Scan.SHOW_TORCH_BUTTON, true);
        }
        if (arg.orientation) {
          // if not set, sensor orientation is used (rotates with the device)
          intent.putExtra(com.google.zxing.client.android.Intents.Scan.ORIENTATION_LOCK, arg.orientation);
        }
        if (arg.formats) {
          intent.putExtra(com.google.zxing.client.android.Intents.Scan.FORMATS, arg.formats);
          // intent.putExtra(com.google.zxing.client.android.Intents.Scan.MODE, com.google.zxing.client.android.Intents.Scan.QR_CODE_MODE);
        }
        if (arg.torchOn === true) {
          intent.putExtra(com.google.zxing.client.android.Intents.Scan.TORCH_ON, true);
        }
        intent.putExtra(com.google.zxing.client.android.Intents.Scan.BEEP_ON_SCAN, arg.beepOnScan !== false);
        if (arg.resultDisplayDuration !== undefined) {
          //  ZXing expects a String
          intent.putExtra(com.google.zxing.client.android.Intents.Scan.RESULT_DISPLAY_DURATION_MS, "" + arg.resultDisplayDuration);
        }
        intent.putExtra(com.google.zxing.client.android.Intents.Scan.SAVE_HISTORY, false);*/

        // rectangle size can be controlled as well (but don't bother as of yet)
        // intent.putExtra(com.google.zxing.client.android.Intents.Scan.WIDTH, 200);
        // intent.putExtra(com.google.zxing.client.android.Intents.Scan.HEIGHT, 200);

        // required for the 'stop' function
        if (!this.broadcastManager) {
          this.broadcastManager = android.support.v4.content.LocalBroadcastManager.getInstance(com.tns.NativeScriptApplication.getInstance());
        }

        const isContinuous = typeof arg.continuousScanCallback === "function";
        if (isContinuous) {
          _onContinuousScanResult = arg.continuousScanCallback;
          intent.putExtra(com.google.zxing.client.android.Intents.Scan.BULK_SCAN, true);

          const cb = android.content.BroadcastReceiver.extend({
            onReceive: (context, data) => {
              const format = data.getStringExtra(com.google.zxing.client.android.Intents.Scan.RESULT_FORMAT);
              const text = data.getStringExtra(com.google.zxing.client.android.Intents.Scan.RESULT);

              // don't report duplicates unless requested
              if (arg.reportDuplicates || this.uniquelyScannedCodes.indexOf("[" + text + "][" + format + "]") === -1) {
                this.uniquelyScannedCodes.push("[" + text + "][" + format + "]");
                const result: ScanResult = {
                  format: format,
                  text: text
                };
                _onContinuousScanResult(result);
              }
            }
          });

          _onScanReceivedCallback = new cb();
          this.broadcastManager.registerReceiver(_onScanReceivedCallback, new android.content.IntentFilter("bulk-barcode-result"));
        }

        if (intent.resolveActivity(com.tns.NativeScriptApplication.getInstance().getPackageManager()) !== null) {
          const onScanResult = (data) => {
            console.log(">> activity result: @ " + new Date().getTime());
            if (data.requestCode === SCANNER_REQUEST_CODE) {
              this.onPermissionGranted = null;
              if (isContinuous) {
                if (_onScanReceivedCallback) {
                  this.broadcastManager.unregisterReceiver(_onScanReceivedCallback);
                  _onScanReceivedCallback = undefined;
                }
              } else {
                if (data.resultCode === android.app.Activity.RESULT_OK) {
                  const format = data.intent.getStringExtra(com.google.zxing.client.android.Intents.Scan.RESULT_FORMAT);
                  const text = data.intent.getStringExtra(com.google.zxing.client.android.Intents.Scan.RESULT);
                  const result: ScanResult = {
                    format: format,
                    text: text
                  };
                  resolve(result);
                } else {
                  reject("Scan aborted");
                }
              }
              arg.closeCallback && arg.closeCallback();
              appModule.android.off('activityResult', onScanResult);
            }
          };
          appModule.android.on('activityResult', onScanResult);
          appModule.android.foregroundActivity.startActivityForResult(intent, SCANNER_REQUEST_CODE);
        } else {
          // this is next to impossible
          reject("Configuration error");
        }
      };

      if (!this.wasCameraPermissionGranted()) {
        this.requestCameraPermissionInternal(onPermissionGranted.bind(this), reject);
        return;
      }

      onPermissionGranted();
    });
  }
}
