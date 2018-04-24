declare module com {
	export module google {
		export module zxing {
			export class BarcodeFormat {
				public static AZTEC: com.google.zxing.BarcodeFormat;
				public static CODABAR: com.google.zxing.BarcodeFormat;
				public static CODE_39: com.google.zxing.BarcodeFormat;
				public static CODE_93: com.google.zxing.BarcodeFormat;
				public static CODE_128: com.google.zxing.BarcodeFormat;
				public static DATA_MATRIX: com.google.zxing.BarcodeFormat;
				public static EAN_8: com.google.zxing.BarcodeFormat;
				public static EAN_13: com.google.zxing.BarcodeFormat;
				public static ITF: com.google.zxing.BarcodeFormat;
				public static MAXICODE: com.google.zxing.BarcodeFormat;
				public static PDF_417: com.google.zxing.BarcodeFormat;
				public static QR_CODE: com.google.zxing.BarcodeFormat;
				public static RSS_14: com.google.zxing.BarcodeFormat;
				public static RSS_EXPANDED: com.google.zxing.BarcodeFormat;
				public static UPC_A: com.google.zxing.BarcodeFormat;
				public static UPC_E: com.google.zxing.BarcodeFormat;
				public static UPC_EAN_EXTENSION: com.google.zxing.BarcodeFormat;
				public static valueOf(param0: string): com.google.zxing.BarcodeFormat;
				public static values(): native.Array<com.google.zxing.BarcodeFormat>;
			}
		}
	}
}

/// <reference path="./com.google.zxing.LuminanceSource.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export abstract class Binarizer {
				public getBlackMatrix(): com.google.zxing.common.BitMatrix;
				public getBlackRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
				public getWidth(): number;
				public getHeight(): number;
				public getLuminanceSource(): com.google.zxing.LuminanceSource;
				public createBinarizer(param0: com.google.zxing.LuminanceSource): com.google.zxing.Binarizer;
				public constructor(param0: com.google.zxing.LuminanceSource);
			}
		}
	}
}

/// <reference path="./com.google.zxing.Binarizer.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class BinaryBitmap {
				public rotateCounterClockwise45(): com.google.zxing.BinaryBitmap;
				public getBlackMatrix(): com.google.zxing.common.BitMatrix;
				public constructor(param0: com.google.zxing.Binarizer);
				public getWidth(): number;
				public getHeight(): number;
				public getBlackRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.BinaryBitmap;
				public isRotateSupported(): boolean;
				public isCropSupported(): boolean;
				public toString(): string;
				public rotateCounterClockwise(): com.google.zxing.BinaryBitmap;
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class ChecksumException extends com.google.zxing.ReaderException {
				public static getChecksumInstance(param0: javalangThrowable): com.google.zxing.ChecksumException;
				public static getChecksumInstance(): com.google.zxing.ChecksumException;
			}
		}
	}
}

import javalangClass = java.lang.Class;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class DecodeHintType {
				public static OTHER: com.google.zxing.DecodeHintType;
				public static PURE_BARCODE: com.google.zxing.DecodeHintType;
				public static POSSIBLE_FORMATS: com.google.zxing.DecodeHintType;
				public static TRY_HARDER: com.google.zxing.DecodeHintType;
				public static CHARACTER_SET: com.google.zxing.DecodeHintType;
				public static ALLOWED_LENGTHS: com.google.zxing.DecodeHintType;
				public static ASSUME_CODE_39_CHECK_DIGIT: com.google.zxing.DecodeHintType;
				public static ASSUME_GS1: com.google.zxing.DecodeHintType;
				public static RETURN_CODABAR_START_END: com.google.zxing.DecodeHintType;
				public static NEED_RESULT_POINT_CALLBACK: com.google.zxing.DecodeHintType;
				public static ALLOWED_EAN_EXTENSIONS: com.google.zxing.DecodeHintType;
				public static valueOf(param0: string): com.google.zxing.DecodeHintType;
				public getValueType(): javalangClass<any>;
				public static values(): native.Array<com.google.zxing.DecodeHintType>;
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class Dimension {
				public constructor(param0: number, param1: number);
				public getWidth(): number;
				public getHeight(): number;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public toString(): string;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class EncodeHintType {
				public static ERROR_CORRECTION: com.google.zxing.EncodeHintType;
				public static CHARACTER_SET: com.google.zxing.EncodeHintType;
				public static DATA_MATRIX_SHAPE: com.google.zxing.EncodeHintType;
				public static MIN_SIZE: com.google.zxing.EncodeHintType;
				public static MAX_SIZE: com.google.zxing.EncodeHintType;
				public static MARGIN: com.google.zxing.EncodeHintType;
				public static PDF417_COMPACT: com.google.zxing.EncodeHintType;
				public static PDF417_COMPACTION: com.google.zxing.EncodeHintType;
				public static PDF417_DIMENSIONS: com.google.zxing.EncodeHintType;
				public static AZTEC_LAYERS: com.google.zxing.EncodeHintType;
				public static QR_VERSION: com.google.zxing.EncodeHintType;
				public static valueOf(param0: string): com.google.zxing.EncodeHintType;
				public static values(): native.Array<com.google.zxing.EncodeHintType>;
			}
		}
	}
}

/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class FormatException extends com.google.zxing.ReaderException {
				public static getFormatInstance(): com.google.zxing.FormatException;
				public static getFormatInstance(param0: javalangThrowable): com.google.zxing.FormatException;
			}
		}
	}
}

/// <reference path="./com.google.zxing.LuminanceSource.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class InvertedLuminanceSource extends com.google.zxing.LuminanceSource {
				public constructor(param0: number, param1: number);
				public isRotateSupported(): boolean;
				public invert(): com.google.zxing.LuminanceSource;
				public getMatrix(): native.Array<number>;
				public rotateCounterClockwise(): com.google.zxing.LuminanceSource;
				public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
				public isCropSupported(): boolean;
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
				public rotateCounterClockwise45(): com.google.zxing.LuminanceSource;
				public constructor(param0: com.google.zxing.LuminanceSource);
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export abstract class LuminanceSource {
				public constructor(param0: number, param1: number);
				public getWidth(): number;
				public getHeight(): number;
				public isRotateSupported(): boolean;
				public invert(): com.google.zxing.LuminanceSource;
				public getMatrix(): native.Array<number>;
				public rotateCounterClockwise(): com.google.zxing.LuminanceSource;
				public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
				public isCropSupported(): boolean;
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
				public rotateCounterClockwise45(): com.google.zxing.LuminanceSource;
				public toString(): string;
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class MultiFormatReader {
				public setHints(param0: javautilMap<any,any>): void;
				public reset(): void;
				public decodeWithState(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
				public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
				public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				public constructor();
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class MultiFormatWriter {
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class NotFoundException extends com.google.zxing.ReaderException {
				public static getNotFoundInstance(): com.google.zxing.NotFoundException;
			}
		}
	}
}

/// <reference path="./com.google.zxing.LuminanceSource.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class PlanarYUVLuminanceSource extends com.google.zxing.LuminanceSource {
				public constructor(param0: number, param1: number);
				public renderThumbnail(): native.Array<number>;
				public getThumbnailHeight(): number;
				public getMatrix(): native.Array<number>;
				public getThumbnailWidth(): number;
				public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
				public isCropSupported(): boolean;
				public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
			}
		}
	}
}

/// <reference path="./com.google.zxing.LuminanceSource.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class RGBLuminanceSource extends com.google.zxing.LuminanceSource {
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: native.Array<number>);
				public getMatrix(): native.Array<number>;
				public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
				public isCropSupported(): boolean;
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class Reader {
				/**
				 * Constructs a new instance of the com.google.zxing.Reader interface with the provided implementation.
				 */
				public constructor(implementation: {
					decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
					reset(): void;
				});
				public reset(): void;
				public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
				public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
			}
		}
	}
}

import javalangStackTraceElement = java.lang.StackTraceElement;
/// <reference path="./java.lang.StackTraceElement.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export abstract class ReaderException {
				public static isStackTrace: boolean;
				public static NO_TRACE: native.Array<javalangStackTraceElement>;
				public fillInStackTrace(): javalangThrowable;
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.ResultMetadataType.d.ts" />
/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class Result {
				public constructor(param0: string, param1: native.Array<number>, param2: number, param3: native.Array<com.google.zxing.ResultPoint>, param4: com.google.zxing.BarcodeFormat, param5: number);
				public getBarcodeFormat(): com.google.zxing.BarcodeFormat;
				public addResultPoints(param0: native.Array<com.google.zxing.ResultPoint>): void;
				public getRawBytes(): native.Array<number>;
				public putMetadata(param0: com.google.zxing.ResultMetadataType, param1: javalangObject): void;
				public toString(): string;
				public getText(): string;
				public putAllMetadata(param0: javautilMap<any,any>): void;
				public constructor(param0: string, param1: native.Array<number>, param2: native.Array<com.google.zxing.ResultPoint>, param3: com.google.zxing.BarcodeFormat, param4: number);
				public constructor(param0: string, param1: native.Array<number>, param2: native.Array<com.google.zxing.ResultPoint>, param3: com.google.zxing.BarcodeFormat);
				public getNumBits(): number;
				public getResultPoints(): native.Array<com.google.zxing.ResultPoint>;
				public getResultMetadata(): javautilMap<any,any>;
				public getTimestamp(): number;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class ResultMetadataType {
				public static OTHER: com.google.zxing.ResultMetadataType;
				public static ORIENTATION: com.google.zxing.ResultMetadataType;
				public static BYTE_SEGMENTS: com.google.zxing.ResultMetadataType;
				public static ERROR_CORRECTION_LEVEL: com.google.zxing.ResultMetadataType;
				public static ISSUE_NUMBER: com.google.zxing.ResultMetadataType;
				public static SUGGESTED_PRICE: com.google.zxing.ResultMetadataType;
				public static POSSIBLE_COUNTRY: com.google.zxing.ResultMetadataType;
				public static UPC_EAN_EXTENSION: com.google.zxing.ResultMetadataType;
				public static PDF417_EXTRA_METADATA: com.google.zxing.ResultMetadataType;
				public static STRUCTURED_APPEND_SEQUENCE: com.google.zxing.ResultMetadataType;
				public static STRUCTURED_APPEND_PARITY: com.google.zxing.ResultMetadataType;
				public static valueOf(param0: string): com.google.zxing.ResultMetadataType;
				public static values(): native.Array<com.google.zxing.ResultMetadataType>;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class ResultPoint {
				public constructor(param0: number, param1: number);
				public equals(param0: javalangObject): boolean;
				public getX(): number;
				public hashCode(): number;
				public getY(): number;
				public static distance(param0: com.google.zxing.ResultPoint, param1: com.google.zxing.ResultPoint): number;
				public toString(): string;
				public static orderBestPatterns(param0: native.Array<com.google.zxing.ResultPoint>): void;
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class ResultPointCallback {
				/**
				 * Constructs a new instance of the com.google.zxing.ResultPointCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
				});
				public foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class Writer {
				/**
				 * Constructs a new instance of the com.google.zxing.Writer interface with the provided implementation.
				 */
				public constructor(implementation: {
					encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
				});
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export class WriterException {
				public constructor(param0: javalangThrowable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export class AztecDetectorResult extends com.google.zxing.common.DetectorResult {
					public getNbLayers(): number;
					public constructor(param0: com.google.zxing.common.BitMatrix, param1: native.Array<com.google.zxing.ResultPoint>);
					public constructor(param0: com.google.zxing.common.BitMatrix, param1: native.Array<com.google.zxing.ResultPoint>, param2: boolean, param3: number, param4: number);
					public isCompact(): boolean;
					public getNbDatablocks(): number;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export class AztecReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export class AztecWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.aztec.AztecDetectorResult.d.ts" />
/// <reference path="./com.google.zxing.common.DecoderResult.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module decoder {
					export class Decoder {
						public constructor();
						public decode(param0: com.google.zxing.aztec.AztecDetectorResult): com.google.zxing.common.DecoderResult;
						public static highLevelDecode(param0: native.Array<boolean>): string;
					}
					export module Decoder {
						export class Table {
							public static UPPER: com.google.zxing.aztec.decoder.Decoder.Table;
							public static LOWER: com.google.zxing.aztec.decoder.Decoder.Table;
							public static MIXED: com.google.zxing.aztec.decoder.Decoder.Table;
							public static DIGIT: com.google.zxing.aztec.decoder.Decoder.Table;
							public static PUNCT: com.google.zxing.aztec.decoder.Decoder.Table;
							public static BINARY: com.google.zxing.aztec.decoder.Decoder.Table;
							public static valueOf(param0: string): com.google.zxing.aztec.decoder.Decoder.Table;
							public static values(): native.Array<com.google.zxing.aztec.decoder.Decoder.Table>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.aztec.AztecDetectorResult.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module detector {
					export class Detector {
						public detect(param0: boolean): com.google.zxing.aztec.AztecDetectorResult;
						public detect(): com.google.zxing.aztec.AztecDetectorResult;
						public constructor(param0: com.google.zxing.common.BitMatrix);
					}
					export module Detector {
						export class Point {
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class AztecCode {
						public setSize(param0: number): void;
						public getMatrix(): com.google.zxing.common.BitMatrix;
						public setCompact(param0: boolean): void;
						public constructor();
						public getSize(): number;
						public setCodeWords(param0: number): void;
						public isCompact(): boolean;
						public setLayers(param0: number): void;
						public getCodeWords(): number;
						public setMatrix(param0: com.google.zxing.common.BitMatrix): void;
						public getLayers(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class BinaryShiftToken extends com.google.zxing.aztec.encoder.Token {
						public toString(): string;
						public appendTo(param0: com.google.zxing.common.BitArray, param1: native.Array<number>): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.aztec.encoder.AztecCode.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class Encoder {
						public static DEFAULT_EC_PERCENT: number;
						public static DEFAULT_AZTEC_LAYERS: number;
						public static encode(param0: native.Array<number>, param1: number, param2: number): com.google.zxing.aztec.encoder.AztecCode;
						public static encode(param0: native.Array<number>): com.google.zxing.aztec.encoder.AztecCode;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class HighLevelEncoder {
						public encode(): com.google.zxing.common.BitArray;
						public constructor(param0: native.Array<number>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class SimpleToken extends com.google.zxing.aztec.encoder.Token {
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class State {
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export abstract class Token {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export abstract class AbstractDoCoMoResultParser extends com.google.zxing.client.result.ResultParser {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.AddressBookParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class AddressBookAUResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.AddressBookParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class AddressBookDoCoMoResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class AddressBookParsedResult extends com.google.zxing.client.result.ParsedResult {
						public constructor(param0: native.Array<string>, param1: native.Array<string>, param2: native.Array<string>, param3: native.Array<string>, param4: native.Array<string>, param5: native.Array<string>, param6: native.Array<string>);
						public getNicknames(): native.Array<string>;
						public getGeo(): native.Array<string>;
						public getEmails(): native.Array<string>;
						public getAddressTypes(): native.Array<string>;
						public getURLs(): native.Array<string>;
						public getDisplayResult(): string;
						public getTitle(): string;
						public getOrg(): string;
						public getNames(): native.Array<string>;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getBirthday(): string;
						public getPhoneNumbers(): native.Array<string>;
						public getPhoneTypes(): native.Array<string>;
						public getEmailTypes(): native.Array<string>;
						public getNote(): string;
						public getAddresses(): native.Array<string>;
						public getPronunciation(): string;
						public getInstantMessenger(): string;
						public constructor(param0: native.Array<string>, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: native.Array<string>, param5: native.Array<string>, param6: native.Array<string>, param7: string, param8: string, param9: native.Array<string>, param10: native.Array<string>, param11: string, param12: string, param13: string, param14: native.Array<string>, param15: native.Array<string>);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.AddressBookParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class BizcardResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.URIParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class BookmarkDoCoMoResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.URIParsedResult;
					}
				}
			}
		}
	}
}

import javautilDate = java.util.Date;
/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class CalendarParsedResult extends com.google.zxing.client.result.ParsedResult {
						public getEnd(): javautilDate;
						public getLongitude(): number;
						public getStart(): javautilDate;
						public isStartAllDay(): boolean;
						public getSummary(): string;
						public getLocation(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: native.Array<string>, param7: string, param8: number, param9: number);
						public getAttendees(): native.Array<string>;
						public getDisplayResult(): string;
						public getOrganizer(): string;
						public getLatitude(): number;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public isEndAllDay(): boolean;
						public getDescription(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class EmailAddressParsedResult extends com.google.zxing.client.result.ParsedResult {
						public getBody(): string;
						public getTos(): native.Array<string>;
						public getCCs(): native.Array<string>;
						public getSubject(): string;
						public getBCCs(): native.Array<string>;
						public getMailtoURI(): string;
						public getEmailAddress(): string;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.EmailAddressParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class EmailAddressResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.EmailAddressParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.EmailAddressParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class EmailDoCoMoResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.EmailAddressParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ExpandedProductParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static KILOGRAM: string;
						public static POUND: string;
						public getProductionDate(): string;
						public equals(param0: javalangObject): boolean;
						public getLotNumber(): string;
						public getPackagingDate(): string;
						public getWeightIncrement(): string;
						public hashCode(): number;
						public getPrice(): string;
						public getPriceIncrement(): string;
						public getPriceCurrency(): string;
						public getDisplayResult(): string;
						public getProductID(): string;
						public getSscc(): string;
						public getBestBeforeDate(): string;
						public getWeightType(): string;
						public getExpirationDate(): string;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getRawText(): string;
						public getUncommonAIs(): javautilMap<any,any>;
						public getWeight(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: javautilMap<any,any>);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ExpandedProductParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ExpandedProductResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ExpandedProductParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class GeoParsedResult extends com.google.zxing.client.result.ParsedResult {
						public getLatitude(): number;
						public getLongitude(): number;
						public getGeoURI(): string;
						public getQuery(): string;
						public getAltitude(): number;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.GeoParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class GeoResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.GeoParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ISBNParsedResult extends com.google.zxing.client.result.ParsedResult {
						public getISBN(): string;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ISBNParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ISBNResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ISBNParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
					}
				}
			}
		}
	}
}

import javalangStringBuilder = java.lang.StringBuilder;
/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export abstract class ParsedResult {
						public static maybeAppend(param0: native.Array<string>, param1: javalangStringBuilder): void;
						public getType(): com.google.zxing.client.result.ParsedResultType;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public static maybeAppend(param0: string, param1: javalangStringBuilder): void;
						public getDisplayResult(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ParsedResultType {
						public static ADDRESSBOOK: com.google.zxing.client.result.ParsedResultType;
						public static EMAIL_ADDRESS: com.google.zxing.client.result.ParsedResultType;
						public static PRODUCT: com.google.zxing.client.result.ParsedResultType;
						public static URI: com.google.zxing.client.result.ParsedResultType;
						public static TEXT: com.google.zxing.client.result.ParsedResultType;
						public static GEO: com.google.zxing.client.result.ParsedResultType;
						public static TEL: com.google.zxing.client.result.ParsedResultType;
						public static SMS: com.google.zxing.client.result.ParsedResultType;
						public static CALENDAR: com.google.zxing.client.result.ParsedResultType;
						public static WIFI: com.google.zxing.client.result.ParsedResultType;
						public static ISBN: com.google.zxing.client.result.ParsedResultType;
						public static VIN: com.google.zxing.client.result.ParsedResultType;
						public static values(): native.Array<com.google.zxing.client.result.ParsedResultType>;
						public static valueOf(param0: string): com.google.zxing.client.result.ParsedResultType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ProductParsedResult extends com.google.zxing.client.result.ParsedResult {
						public getDisplayResult(): string;
						public getProductID(): string;
						public getNormalizedProductID(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ProductParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ProductResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ProductParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export abstract class ResultParser {
						public static maybeAppend(param0: native.Array<string>, param1: javalangStringBuilder): void;
						public constructor();
						public static getMassagedText(param0: com.google.zxing.Result): string;
						public static parseResult(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public static isStringOfDigits(param0: string, param1: number): boolean;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public static unescapeBackslash(param0: string): string;
						public static parseHexDigit(param0: string): number;
						public static maybeAppend(param0: string, param1: javalangStringBuilder): void;
						public static maybeWrap(param0: string): native.Array<string>;
						public static isSubstringOfDigits(param0: string, param1: number, param2: number): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.SMSParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class SMSMMSResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.SMSParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class SMSParsedResult extends com.google.zxing.client.result.ParsedResult {
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public getBody(): string;
						public getNumbers(): native.Array<string>;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getSMSURI(): string;
						public getSubject(): string;
						public constructor(param0: native.Array<string>, param1: native.Array<string>, param2: string, param3: string);
						public getVias(): native.Array<string>;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.SMSParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class SMSTOMMSTOResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.SMSParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.EmailAddressParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class SMTPResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.EmailAddressParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class TelParsedResult extends com.google.zxing.client.result.ParsedResult {
						public getNumber(): string;
						public constructor(param0: string, param1: string, param2: string);
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getTelURI(): string;
						public getDisplayResult(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.TelParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class TelResultParser extends com.google.zxing.client.result.ResultParser {
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.TelParsedResult;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class TextParsedResult extends com.google.zxing.client.result.ParsedResult {
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public constructor(param0: string, param1: string);
						public getLanguage(): string;
						public getText(): string;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class URIParsedResult extends com.google.zxing.client.result.ParsedResult {
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public isPossiblyMaliciousURI(): boolean;
						public getURI(): string;
						public constructor(param0: string, param1: string);
						public getDisplayResult(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.URIParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class URIResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.URIParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.URIParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class URLTOResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.URIParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.AddressBookParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class VCardResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.CalendarParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class VEventResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.CalendarParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class VINParsedResult extends com.google.zxing.client.result.ParsedResult {
						public getVehicleIdentifierSection(): string;
						public getModelYear(): number;
						public getVehicleAttributes(): string;
						public getSequentialNumber(): string;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getVehicleDescriptorSection(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: number, param7: string, param8: string);
						public getCountryCode(): string;
						public getVIN(): string;
						public getDisplayResult(): string;
						public getWorldManufacturerID(): string;
						public getPlantCode(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.VINParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class VINResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.VINParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.client.result.ParsedResultType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class WifiParsedResult extends com.google.zxing.client.result.ParsedResult {
						public constructor(param0: string, param1: string, param2: string);
						public isHidden(): boolean;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public constructor(param0: string, param1: string, param2: string, param3: boolean);
						public getPassword(): string;
						public getNetworkEncryption(): string;
						public getSsid(): string;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.client.result.ParsedResult.d.ts" />
/// <reference path="./com.google.zxing.client.result.WifiParsedResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class WifiResultParser extends com.google.zxing.client.result.ResultParser {
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.WifiParsedResult;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export class BitArray {
					public appendBits(param0: number, param1: number): void;
					public get(param0: number): boolean;
					public setRange(param0: number, param1: number): void;
					public appendBit(param0: boolean): void;
					public equals(param0: javalangObject): boolean;
					public setBulk(param0: number, param1: number): void;
					public toBytes(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
					public xor(param0: com.google.zxing.common.BitArray): void;
					public getNextUnset(param0: number): number;
					public getSize(): number;
					public getSizeInBytes(): number;
					public reverse(): void;
					public appendBitArray(param0: com.google.zxing.common.BitArray): void;
					public clone(): com.google.zxing.common.BitArray;
					public toString(): string;
					public getNextSet(param0: number): number;
					public constructor();
					public set(param0: number): void;
					public clear(): void;
					public isRange(param0: number, param1: number, param2: boolean): boolean;
					public flip(param0: number): void;
					public getBitArray(): native.Array<number>;
					public hashCode(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export class BitMatrix {
					public toString(param0: string, param1: string): string;
					public rotate180(): void;
					public clone(): com.google.zxing.common.BitMatrix;
					public flip(param0: number, param1: number): void;
					public unset(param0: number, param1: number): void;
					public setRow(param0: number, param1: com.google.zxing.common.BitArray): void;
					public toString(): string;
					public clear(): void;
					public getEnclosingRectangle(): native.Array<number>;
					public setRegion(param0: number, param1: number, param2: number, param3: number): void;
					public hashCode(): number;
					public get(param0: number, param1: number): boolean;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public getRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
					public getHeight(): number;
					public equals(param0: javalangObject): boolean;
					public getWidth(): number;
					public static parse(param0: string, param1: string, param2: string): com.google.zxing.common.BitMatrix;
					public set(param0: number, param1: number): void;
					public xor(param0: com.google.zxing.common.BitMatrix): void;
					public toString(param0: string, param1: string, param2: string): string;
					public getTopLeftOnBit(): native.Array<number>;
					public getBottomRightOnBit(): native.Array<number>;
					public getRowSize(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class BitSource {
					public available(): number;
					public constructor(param0: native.Array<number>);
					public getBitOffset(): number;
					public readBits(param0: number): number;
					public getByteOffset(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export class CharacterSetECI {
					public static Cp437: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_1: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_2: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_3: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_4: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_5: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_6: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_7: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_8: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_9: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_10: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_11: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_13: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_14: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_15: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_16: com.google.zxing.common.CharacterSetECI;
					public static SJIS: com.google.zxing.common.CharacterSetECI;
					public static Cp1250: com.google.zxing.common.CharacterSetECI;
					public static Cp1251: com.google.zxing.common.CharacterSetECI;
					public static Cp1252: com.google.zxing.common.CharacterSetECI;
					public static Cp1256: com.google.zxing.common.CharacterSetECI;
					public static UnicodeBigUnmarked: com.google.zxing.common.CharacterSetECI;
					public static UTF8: com.google.zxing.common.CharacterSetECI;
					public static ASCII: com.google.zxing.common.CharacterSetECI;
					public static Big5: com.google.zxing.common.CharacterSetECI;
					public static GB18030: com.google.zxing.common.CharacterSetECI;
					public static EUC_KR: com.google.zxing.common.CharacterSetECI;
					public static getCharacterSetECIByName(param0: string): com.google.zxing.common.CharacterSetECI;
					public static values(): native.Array<com.google.zxing.common.CharacterSetECI>;
					public getValue(): number;
					public static valueOf(param0: string): com.google.zxing.common.CharacterSetECI;
					public static getCharacterSetECIByValue(param0: number): com.google.zxing.common.CharacterSetECI;
				}
			}
		}
	}
}

import javautilList = java.util.List;
import javalangInteger = java.lang.Integer;
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export class DecoderResult {
					public getText(): string;
					public getErrorsCorrected(): javalangInteger;
					public getECLevel(): string;
					public constructor(param0: native.Array<number>, param1: string, param2: javautilList<any>, param3: string);
					public setNumBits(param0: number): void;
					public setErasures(param0: javalangInteger): void;
					public getStructuredAppendParity(): number;
					public constructor(param0: native.Array<number>, param1: string, param2: javautilList<any>, param3: string, param4: number, param5: number);
					public getOther(): javalangObject;
					public hasStructuredAppend(): boolean;
					public getByteSegments(): javautilList<any>;
					public getRawBytes(): native.Array<number>;
					public getErasures(): javalangInteger;
					public setErrorsCorrected(param0: javalangInteger): void;
					public setOther(param0: javalangObject): void;
					public getStructuredAppendSequenceNumber(): number;
					public getNumBits(): number;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.common.PerspectiveTransform.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export class DefaultGridSampler extends com.google.zxing.common.GridSampler {
					public constructor();
					public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number): com.google.zxing.common.BitMatrix;
					public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: com.google.zxing.common.PerspectiveTransform): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export class DetectorResult {
					public constructor(param0: com.google.zxing.common.BitMatrix, param1: native.Array<com.google.zxing.ResultPoint>);
					public getBits(): com.google.zxing.common.BitMatrix;
					public getPoints(): native.Array<com.google.zxing.ResultPoint>;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Binarizer.d.ts" />
/// <reference path="./com.google.zxing.LuminanceSource.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export class GlobalHistogramBinarizer extends com.google.zxing.Binarizer {
					public constructor(param0: com.google.zxing.LuminanceSource);
					public createBinarizer(param0: com.google.zxing.LuminanceSource): com.google.zxing.Binarizer;
					public getBlackMatrix(): com.google.zxing.common.BitMatrix;
					public getBlackRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.common.PerspectiveTransform.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export abstract class GridSampler {
					public constructor();
					public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number): com.google.zxing.common.BitMatrix;
					public static checkAndNudgePoints(param0: com.google.zxing.common.BitMatrix, param1: native.Array<number>): void;
					public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: com.google.zxing.common.PerspectiveTransform): com.google.zxing.common.BitMatrix;
					public static getInstance(): com.google.zxing.common.GridSampler;
					public static setGridSampler(param0: com.google.zxing.common.GridSampler): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Binarizer.d.ts" />
/// <reference path="./com.google.zxing.LuminanceSource.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export class HybridBinarizer extends com.google.zxing.common.GlobalHistogramBinarizer {
					public constructor(param0: com.google.zxing.LuminanceSource);
					public createBinarizer(param0: com.google.zxing.LuminanceSource): com.google.zxing.Binarizer;
					public getBlackMatrix(): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class PerspectiveTransform {
					public transformPoints(param0: native.Array<number>, param1: native.Array<number>): void;
					public transformPoints(param0: native.Array<number>): void;
					public static quadrilateralToQuadrilateral(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number): com.google.zxing.common.PerspectiveTransform;
					public static quadrilateralToSquare(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): com.google.zxing.common.PerspectiveTransform;
					public static squareToQuadrilateral(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): com.google.zxing.common.PerspectiveTransform;
				}
			}
		}
	}
}

/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export class StringUtils {
					public static SHIFT_JIS: string;
					public static GB2312: string;
					public static guessEncoding(param0: native.Array<number>, param1: javautilMap<any,any>): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module detector {
					export class MathUtils {
						public static distance(param0: number, param1: number, param2: number, param3: number): number;
						public static round(param0: number): number;
						public static sum(param0: native.Array<number>): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export module detector {
					export class MonochromeRectangleDetector {
						public detect(): native.Array<com.google.zxing.ResultPoint>;
						public constructor(param0: com.google.zxing.common.BitMatrix);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export module detector {
					export class WhiteRectangleDetector {
						public constructor(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: number);
						public detect(): native.Array<com.google.zxing.ResultPoint>;
						public constructor(param0: com.google.zxing.common.BitMatrix);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class GenericGF {
						public static AZTEC_DATA_12: com.google.zxing.common.reedsolomon.GenericGF;
						public static AZTEC_DATA_10: com.google.zxing.common.reedsolomon.GenericGF;
						public static AZTEC_DATA_6: com.google.zxing.common.reedsolomon.GenericGF;
						public static AZTEC_PARAM: com.google.zxing.common.reedsolomon.GenericGF;
						public static QR_CODE_FIELD_256: com.google.zxing.common.reedsolomon.GenericGF;
						public static DATA_MATRIX_FIELD_256: com.google.zxing.common.reedsolomon.GenericGF;
						public static AZTEC_DATA_8: com.google.zxing.common.reedsolomon.GenericGF;
						public static MAXICODE_FIELD_64: com.google.zxing.common.reedsolomon.GenericGF;
						public getSize(): number;
						public constructor(param0: number, param1: number, param2: number);
						public getGeneratorBase(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class GenericGFPoly {
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.reedsolomon.GenericGF.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class ReedSolomonDecoder {
						public constructor(param0: com.google.zxing.common.reedsolomon.GenericGF);
						public decode(param0: native.Array<number>, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.reedsolomon.GenericGF.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class ReedSolomonEncoder {
						public constructor(param0: com.google.zxing.common.reedsolomon.GenericGF);
						public encode(param0: native.Array<number>, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class ReedSolomonException {
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export class DataMatrixReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export class DataMatrixWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class BitMatrixParser {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class DataBlock {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class DecodedBitStreamParser {
					}
					export module DecodedBitStreamParser {
						export class Mode {
							public static PAD_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static ASCII_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static C40_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static TEXT_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static ANSIX12_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static EDIFACT_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static BASE256_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static valueOf(param0: string): com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static values(): native.Array<com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.common.DecoderResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class Decoder {
						public constructor();
						public decode(param0: native.Array<native.Array<boolean>>): com.google.zxing.common.DecoderResult;
						public decode(param0: com.google.zxing.common.BitMatrix): com.google.zxing.common.DecoderResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class Version {
						public getDataRegionSizeRows(): number;
						public getSymbolSizeColumns(): number;
						public getDataRegionSizeColumns(): number;
						public getVersionNumber(): number;
						public getTotalCodewords(): number;
						public getSymbolSizeRows(): number;
						public static getVersionForDimensions(param0: number, param1: number): com.google.zxing.datamatrix.decoder.Version;
						public toString(): string;
					}
					export module Version {
						export class ECB {
						}
						export class ECBlocks {
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.common.DetectorResult.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module detector {
					export class Detector {
						public constructor(param0: com.google.zxing.common.BitMatrix);
						public detect(): com.google.zxing.common.DetectorResult;
					}
					export module Detector {
						export class ResultPointsAndTransitions {
							public toString(): string;
						}
						export class ResultPointsAndTransitionsComparator {
							public compare(param0: com.google.zxing.datamatrix.detector.Detector.ResultPointsAndTransitions, param1: com.google.zxing.datamatrix.detector.Detector.ResultPointsAndTransitions): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.datamatrix.encoder.EncoderContext.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class ASCIIEncoder {
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.datamatrix.encoder.EncoderContext.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class Base256Encoder {
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.datamatrix.encoder.EncoderContext.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class C40Encoder {
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class DataMatrixSymbolInfo144 extends com.google.zxing.datamatrix.encoder.SymbolInfo {
						public getDataLengthForInterleavedBlock(param0: number): number;
						public getInterleavedBlockCount(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.CharSequence.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class DefaultPlacement {
						public getBit(param0: number, param1: number): boolean;
						public constructor(param0: string, param1: number, param2: number);
						public place(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.datamatrix.encoder.EncoderContext.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class EdifactEncoder {
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.datamatrix.encoder.EncoderContext.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class Encoder {
						/**
						 * Constructs a new instance of the com.google.zxing.datamatrix.encoder.Encoder interface with the provided implementation.
						 */
						public constructor(implementation: {
							getEncodingMode(): number;
							encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
						});
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Dimension.d.ts" />
/// <reference path="./com.google.zxing.datamatrix.encoder.SymbolInfo.d.ts" />
/// <reference path="./com.google.zxing.datamatrix.encoder.SymbolShapeHint.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class EncoderContext {
						public setSymbolShape(param0: com.google.zxing.datamatrix.encoder.SymbolShapeHint): void;
						public getMessage(): string;
						public writeCodewords(param0: string): void;
						public resetEncoderSignal(): void;
						public getRemainingCharacters(): number;
						public hasMoreCharacters(): boolean;
						public getCurrent(): string;
						public writeCodeword(param0: string): void;
						public getCodewords(): javalangStringBuilder;
						public signalEncoderChange(param0: number): void;
						public setSizeConstraints(param0: com.google.zxing.Dimension, param1: com.google.zxing.Dimension): void;
						public getNewEncoding(): number;
						public updateSymbolInfo(): void;
						public updateSymbolInfo(param0: number): void;
						public resetSymbolInfo(): void;
						public getSymbolInfo(): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public setSkipAtEnd(param0: number): void;
						public getCurrentChar(): string;
						public getCodewordCount(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.datamatrix.encoder.SymbolInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class ErrorCorrection {
						public static encodeECC200(param0: string, param1: com.google.zxing.datamatrix.encoder.SymbolInfo): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Dimension.d.ts" />
/// <reference path="./com.google.zxing.datamatrix.encoder.SymbolShapeHint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class HighLevelEncoder {
						public static encodeHighLevel(param0: string): string;
						public static encodeHighLevel(param0: string, param1: com.google.zxing.datamatrix.encoder.SymbolShapeHint, param2: com.google.zxing.Dimension, param3: com.google.zxing.Dimension): string;
						public static determineConsecutiveDigitCount(param0: string, param1: number): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.Dimension.d.ts" />
/// <reference path="./com.google.zxing.datamatrix.encoder.SymbolShapeHint.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class SymbolInfo {
						public matrixWidth: number;
						public matrixHeight: number;
						public getDataLengthForInterleavedBlock(param0: number): number;
						public static lookup(param0: number, param1: com.google.zxing.datamatrix.encoder.SymbolShapeHint, param2: com.google.zxing.Dimension, param3: com.google.zxing.Dimension, param4: boolean): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public getErrorLengthForInterleavedBlock(param0: number): number;
						public getInterleavedBlockCount(): number;
						public toString(): string;
						public static lookup(param0: number, param1: boolean, param2: boolean): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number);
						public getSymbolDataWidth(): number;
						public getSymbolDataHeight(): number;
						public getSymbolHeight(): number;
						public getDataCapacity(): number;
						public getErrorCodewords(): number;
						public getSymbolWidth(): number;
						public static lookup(param0: number): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public static lookup(param0: number, param1: com.google.zxing.datamatrix.encoder.SymbolShapeHint): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public static overrideSymbolSet(param0: native.Array<com.google.zxing.datamatrix.encoder.SymbolInfo>): void;
						public getCodewordCount(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class SymbolShapeHint {
						public static FORCE_NONE: com.google.zxing.datamatrix.encoder.SymbolShapeHint;
						public static FORCE_SQUARE: com.google.zxing.datamatrix.encoder.SymbolShapeHint;
						public static FORCE_RECTANGLE: com.google.zxing.datamatrix.encoder.SymbolShapeHint;
						public static values(): native.Array<com.google.zxing.datamatrix.encoder.SymbolShapeHint>;
						public static valueOf(param0: string): com.google.zxing.datamatrix.encoder.SymbolShapeHint;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.datamatrix.encoder.EncoderContext.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class TextEncoder extends com.google.zxing.datamatrix.encoder.C40Encoder {
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.datamatrix.encoder.EncoderContext.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class X12Encoder extends com.google.zxing.datamatrix.encoder.C40Encoder {
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module maxicode {
				export class MaxiCodeReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module maxicode {
				export module decoder {
					export class BitMatrixParser {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module maxicode {
				export module decoder {
					export class DecodedBitStreamParser {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.common.DecoderResult.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module maxicode {
				export module decoder {
					export class Decoder {
						public constructor();
						public decode(param0: com.google.zxing.common.BitMatrix, param1: javautilMap<any,any>): com.google.zxing.common.DecoderResult;
						public decode(param0: com.google.zxing.common.BitMatrix): com.google.zxing.common.DecoderResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Reader.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module multi {
				export class ByQuadrantReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor(param0: com.google.zxing.Reader);
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Reader.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module multi {
				export class GenericMultipleBarcodeReader {
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): native.Array<com.google.zxing.Result>;
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
					public constructor(param0: com.google.zxing.Reader);
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module multi {
				export class MultipleBarcodeReader {
					/**
					 * Constructs a new instance of the com.google.zxing.multi.MultipleBarcodeReader interface with the provided implementation.
					 */
					public constructor(implementation: {
						decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
						decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): native.Array<com.google.zxing.Result>;
					});
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): native.Array<com.google.zxing.Result>;
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module multi {
				export module qrcode {
					export class QRCodeMultiReader extends com.google.zxing.qrcode.QRCodeReader implements com.google.zxing.multi.MultipleBarcodeReader {
						public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
						public constructor();
						public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
						public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): native.Array<com.google.zxing.Result>;
						public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
						public reset(): void;
					}
					export module QRCodeMultiReader {
						export class SAComparator {
							public compare(param0: com.google.zxing.Result, param1: com.google.zxing.Result): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.common.DetectorResult.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module multi {
				export module qrcode {
					export module detector {
						export class MultiDetector extends com.google.zxing.qrcode.detector.Detector {
							public constructor(param0: com.google.zxing.common.BitMatrix);
							public detectMulti(param0: javautilMap<any,any>): native.Array<com.google.zxing.common.DetectorResult>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.qrcode.detector.FinderPattern.d.ts" />
/// <reference path="./com.google.zxing.qrcode.detector.FinderPatternInfo.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module multi {
				export module qrcode {
					export module detector {
						export class MultiFinderPatternFinder extends com.google.zxing.qrcode.detector.FinderPatternFinder {
							public findMulti(param0: javautilMap<any,any>): native.Array<com.google.zxing.qrcode.detector.FinderPatternInfo>;
						}
						export module MultiFinderPatternFinder {
							export class ModuleSizeComparator {
								public compare(param0: com.google.zxing.qrcode.detector.FinderPattern, param1: com.google.zxing.qrcode.detector.FinderPattern): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class CodaBarReader extends com.google.zxing.oned.OneDReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class CodaBarWriter extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code128Reader extends com.google.zxing.oned.OneDReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code128Writer extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
				export module Code128Writer {
					export class CType {
						public static UNCODABLE: com.google.zxing.oned.Code128Writer.CType;
						public static ONE_DIGIT: com.google.zxing.oned.Code128Writer.CType;
						public static TWO_DIGITS: com.google.zxing.oned.Code128Writer.CType;
						public static FNC_1: com.google.zxing.oned.Code128Writer.CType;
						public static values(): native.Array<com.google.zxing.oned.Code128Writer.CType>;
						public static valueOf(param0: string): com.google.zxing.oned.Code128Writer.CType;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code39Reader extends com.google.zxing.oned.OneDReader {
					public constructor(param0: boolean, param1: boolean);
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor(param0: boolean);
					public constructor();
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code39Writer extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code93Reader extends com.google.zxing.oned.OneDReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code93Writer extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
					public static appendPattern(param0: native.Array<boolean>, param1: number, param2: native.Array<number>, param3: boolean): number;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EAN13Reader extends com.google.zxing.oned.UPCEANReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: javalangStringBuilder): number;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EAN13Writer extends com.google.zxing.oned.UPCEANWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EAN8Reader extends com.google.zxing.oned.UPCEANReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: javalangStringBuilder): number;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EAN8Writer extends com.google.zxing.oned.UPCEANWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EANManufacturerOrgSupport {
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class ITFReader extends com.google.zxing.oned.OneDReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class ITFWriter extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class MultiFormatOneDReader extends com.google.zxing.oned.OneDReader {
					public reset(): void;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public constructor();
					public constructor(param0: javautilMap<any,any>);
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class MultiFormatUPCEANReader extends com.google.zxing.oned.OneDReader {
					public reset(): void;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public constructor();
					public constructor(param0: javautilMap<any,any>);
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export abstract class OneDReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public static recordPattern(param0: com.google.zxing.common.BitArray, param1: number, param2: native.Array<number>): void;
					public static patternMatchVariance(param0: native.Array<number>, param1: native.Array<number>, param2: number): number;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public static recordPatternInReverse(param0: com.google.zxing.common.BitArray, param1: number, param2: native.Array<number>): void;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export abstract class OneDimensionalCodeWriter {
					public getDefaultMargin(): number;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
					public static appendPattern(param0: native.Array<boolean>, param1: number, param2: native.Array<number>, param3: boolean): number;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCAReader extends com.google.zxing.oned.UPCEANReader {
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: native.Array<number>, param3: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: javalangStringBuilder): number;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCAWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEANExtension2Support {
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEANExtension5Support {
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEANExtensionSupport {
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export abstract class UPCEANReader extends com.google.zxing.oned.OneDReader {
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: native.Array<number>, param3: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: javalangStringBuilder): number;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export abstract class UPCEANWriter extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public getDefaultMargin(): number;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEReader extends com.google.zxing.oned.UPCEANReader {
					public checkChecksum(param0: string): boolean;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: javalangStringBuilder): number;
					public static convertUPCEtoUPCA(param0: string): string;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
					public decodeEnd(param0: com.google.zxing.common.BitArray, param1: number): native.Array<number>;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEWriter extends com.google.zxing.oned.UPCEANWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export abstract class AbstractRSSReader extends com.google.zxing.oned.OneDReader {
						public constructor();
						public getDataCharacterCounters(): native.Array<number>;
						public getOddCounts(): native.Array<number>;
						public static increment(param0: native.Array<number>, param1: native.Array<number>): void;
						public getDecodeFinderCounters(): native.Array<number>;
						public getOddRoundingErrors(): native.Array<number>;
						public static count(param0: native.Array<number>): number;
						public getEvenRoundingErrors(): native.Array<number>;
						public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
						public static parseFinderValue(param0: native.Array<number>, param1: native.Array<native.Array<number>>): number;
						public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
						public getEvenCounts(): native.Array<number>;
						public static isFinderPattern(param0: native.Array<number>): boolean;
						public reset(): void;
						public static decrement(param0: native.Array<number>, param1: native.Array<number>): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class DataCharacter {
						public getChecksumPortion(): number;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
						public getValue(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class FinderPattern {
						public equals(param0: javalangObject): boolean;
						public getResultPoints(): native.Array<com.google.zxing.ResultPoint>;
						public hashCode(): number;
						public getStartEnd(): native.Array<number>;
						public constructor(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number);
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class Pair extends com.google.zxing.oned.rss.DataCharacter {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class RSS14Reader extends com.google.zxing.oned.rss.AbstractRSSReader {
						public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
						public constructor();
						public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
						public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class RSSUtils {
						public static getRSSvalue(param0: native.Array<number>, param1: number, param2: boolean): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export class BitArrayBuilder {
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export class ExpandedPair {
							public mustBeLast(): boolean;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: javalangObject): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export class ExpandedRow {
							public hashCode(): number;
							public toString(): string;
							public equals(param0: javalangObject): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export class RSSExpandedReader extends com.google.zxing.oned.rss.AbstractRSSReader {
							public constructor();
							public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: javautilMap<any,any>): com.google.zxing.Result;
							public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
							public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI013103decoder extends com.google.zxing.oned.rss.expanded.decoders.AI013x0xDecoder {
								public checkWeight(param0: number): number;
								public addWeightCode(param0: javalangStringBuilder, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI01320xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI013x0xDecoder {
								public checkWeight(param0: number): number;
								public addWeightCode(param0: javalangStringBuilder, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI01392xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI01393xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI013x0x1xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01weightDecoder {
								public parseInformation(): string;
								public checkWeight(param0: number): number;
								public addWeightCode(param0: javalangStringBuilder, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class AI013x0xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01weightDecoder {
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI01AndOtherAIs extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class AI01decoder extends com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder {
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class AI01weightDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
								public checkWeight(param0: number): number;
								public addWeightCode(param0: javalangStringBuilder, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitArray.d.ts" />
/// <reference path="./com.google.zxing.oned.rss.expanded.decoders.GeneralAppIdDecoder.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class AbstractExpandedDecoder {
								public parseInformation(): string;
								public static createDecoder(param0: com.google.zxing.common.BitArray): com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder;
								public getInformation(): com.google.zxing.common.BitArray;
								public getGeneralDecoder(): com.google.zxing.oned.rss.expanded.decoders.GeneralAppIdDecoder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AnyAIDecoder extends com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder {
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class BlockParsedResult {
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class CurrentParsingState {
							}
							export module CurrentParsingState {
								export class State {
									public static NUMERIC: com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
									public static ALPHA: com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
									public static ISO_IEC_646: com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
									public static valueOf(param0: string): com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
									public static values(): native.Array<com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class DecodedChar extends com.google.zxing.oned.rss.expanded.decoders.DecodedObject {
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class DecodedInformation extends com.google.zxing.oned.rss.expanded.decoders.DecodedObject {
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class DecodedNumeric extends com.google.zxing.oned.rss.expanded.decoders.DecodedObject {
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class DecodedObject {
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class FieldParser {
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class GeneralAppIdDecoder {
							}
						}
					}
				}
			}
		}
	}
}

import javautilCollection = java.util.Collection;
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export class PDF417Common {
					public static NUMBER_OF_CODEWORDS: number;
					public static MAX_CODEWORDS_IN_BARCODE: number;
					public static MIN_ROWS_IN_BARCODE: number;
					public static MAX_ROWS_IN_BARCODE: number;
					public static MODULES_IN_CODEWORD: number;
					public static MODULES_IN_STOP_PATTERN: number;
					public static BARS_IN_MODULE: number;
					public static SYMBOL_TABLE: native.Array<number>;
					public static getBitCountSum(param0: native.Array<number>): number;
					public static toIntArray(param0: javautilCollection<any>): native.Array<number>;
					public static getCodeword(param0: number): number;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export class PDF417Reader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): native.Array<com.google.zxing.Result>;
					public constructor();
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export class PDF417ResultMetadata {
					public getSegmentIndex(): number;
					public constructor();
					public setSegmentIndex(param0: number): void;
					public setOptionalData(param0: native.Array<number>): void;
					public getOptionalData(): native.Array<number>;
					public setLastSegment(param0: boolean): void;
					public getFileId(): string;
					public isLastSegment(): boolean;
					public setFileId(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export class PDF417Writer {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class BarcodeMetadata {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Integer.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class BarcodeValue {
						public getConfidence(param0: number): javalangInteger;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class BoundingBox {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class Codeword {
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class DecodedBitStreamParser {
					}
					export module DecodedBitStreamParser {
						export class Mode {
							public static ALPHA: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static LOWER: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static MIXED: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static PUNCT: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static ALPHA_SHIFT: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static PUNCT_SHIFT: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static valueOf(param0: string): com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static values(): native.Array<com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.pdf417.decoder.BoundingBox.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class DetectionResult {
						public setBoundingBox(param0: com.google.zxing.pdf417.decoder.BoundingBox): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class DetectionResultColumn {
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class DetectionResultRowIndicatorColumn extends com.google.zxing.pdf417.decoder.DetectionResultColumn {
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class PDF417CodewordDecoder {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.common.DecoderResult.d.ts" />
/// <reference path="./com.google.zxing.pdf417.decoder.BarcodeValue.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class PDF417ScanningDecoder {
						public static decode(param0: com.google.zxing.common.BitMatrix, param1: com.google.zxing.ResultPoint, param2: com.google.zxing.ResultPoint, param3: com.google.zxing.ResultPoint, param4: com.google.zxing.ResultPoint, param5: number, param6: number): com.google.zxing.common.DecoderResult;
						public static toString(param0: native.Array<native.Array<com.google.zxing.pdf417.decoder.BarcodeValue>>): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export module ec {
						export class ErrorCorrection {
							public constructor();
							public decode(param0: native.Array<number>, param1: number, param2: native.Array<number>): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export module ec {
						export class ModulusGF {
							public static PDF417_GF: com.google.zxing.pdf417.decoder.ec.ModulusGF;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export module ec {
						export class ModulusPoly {
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.pdf417.detector.PDF417DetectorResult.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module detector {
					export class Detector {
						public static detect(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>, param2: boolean): com.google.zxing.pdf417.detector.PDF417DetectorResult;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module detector {
					export class PDF417DetectorResult {
						public getBits(): com.google.zxing.common.BitMatrix;
						public constructor(param0: com.google.zxing.common.BitMatrix, param1: javautilList<any>);
						public getPoints(): javautilList<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class BarcodeMatrix {
						public getMatrix(): native.Array<native.Array<number>>;
						public getScaledMatrix(param0: number, param1: number): native.Array<native.Array<number>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class BarcodeRow {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class Compaction {
						public static AUTO: com.google.zxing.pdf417.encoder.Compaction;
						public static TEXT: com.google.zxing.pdf417.encoder.Compaction;
						public static BYTE: com.google.zxing.pdf417.encoder.Compaction;
						public static NUMERIC: com.google.zxing.pdf417.encoder.Compaction;
						public static valueOf(param0: string): com.google.zxing.pdf417.encoder.Compaction;
						public static values(): native.Array<com.google.zxing.pdf417.encoder.Compaction>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class Dimensions {
						public getMinCols(): number;
						public getMaxRows(): number;
						public getMaxCols(): number;
						public getMinRows(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
				}
			}
		}
	}
}

import javaniocharsetCharset = java.nio.charset.Charset;
/// <reference path="./com.google.zxing.pdf417.encoder.BarcodeMatrix.d.ts" />
/// <reference path="./com.google.zxing.pdf417.encoder.Compaction.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class PDF417 {
						public setCompact(param0: boolean): void;
						public setEncoding(param0: javaniocharsetCharset): void;
						public constructor();
						public setDimensions(param0: number, param1: number, param2: number, param3: number): void;
						public constructor(param0: boolean);
						public setCompaction(param0: com.google.zxing.pdf417.encoder.Compaction): void;
						public getBarcodeMatrix(): com.google.zxing.pdf417.encoder.BarcodeMatrix;
						public generateBarcodeLogic(param0: string, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class PDF417ErrorCorrection {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class PDF417HighLevelEncoder {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BinaryBitmap.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./com.google.zxing.qrcode.decoder.Decoder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export class QRCodeReader {
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public getDecoder(): com.google.zxing.qrcode.decoder.Decoder;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: javautilMap<any,any>): com.google.zxing.Result;
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.BarcodeFormat.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export class QRCodeWriter {
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: javautilMap<any,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class BitMatrixParser {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class DataBlock {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export abstract class DataMask {
						public static DATA_MASK_000: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_001: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_010: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_011: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_100: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_101: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_110: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_111: com.google.zxing.qrcode.decoder.DataMask;
						public static valueOf(param0: string): com.google.zxing.qrcode.decoder.DataMask;
						public static values(): native.Array<com.google.zxing.qrcode.decoder.DataMask>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class DecodedBitStreamParser {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.common.DecoderResult.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class Decoder {
						public constructor();
						public decode(param0: com.google.zxing.common.BitMatrix, param1: javautilMap<any,any>): com.google.zxing.common.DecoderResult;
						public decode(param0: native.Array<native.Array<boolean>>): com.google.zxing.common.DecoderResult;
						public decode(param0: native.Array<native.Array<boolean>>, param1: javautilMap<any,any>): com.google.zxing.common.DecoderResult;
						public decode(param0: com.google.zxing.common.BitMatrix): com.google.zxing.common.DecoderResult;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class ErrorCorrectionLevel {
						public static L: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static M: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static Q: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static H: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static forBits(param0: number): com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static values(): native.Array<com.google.zxing.qrcode.decoder.ErrorCorrectionLevel>;
						public static valueOf(param0: string): com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public getBits(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class FormatInformation {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.qrcode.decoder.Version.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class Mode {
						public static TERMINATOR: com.google.zxing.qrcode.decoder.Mode;
						public static NUMERIC: com.google.zxing.qrcode.decoder.Mode;
						public static ALPHANUMERIC: com.google.zxing.qrcode.decoder.Mode;
						public static STRUCTURED_APPEND: com.google.zxing.qrcode.decoder.Mode;
						public static BYTE: com.google.zxing.qrcode.decoder.Mode;
						public static ECI: com.google.zxing.qrcode.decoder.Mode;
						public static KANJI: com.google.zxing.qrcode.decoder.Mode;
						public static FNC1_FIRST_POSITION: com.google.zxing.qrcode.decoder.Mode;
						public static FNC1_SECOND_POSITION: com.google.zxing.qrcode.decoder.Mode;
						public static HANZI: com.google.zxing.qrcode.decoder.Mode;
						public static forBits(param0: number): com.google.zxing.qrcode.decoder.Mode;
						public static values(): native.Array<com.google.zxing.qrcode.decoder.Mode>;
						public getBits(): number;
						public static valueOf(param0: string): com.google.zxing.qrcode.decoder.Mode;
						public getCharacterCountBits(param0: com.google.zxing.qrcode.decoder.Version): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class QRCodeDecoderMetaData {
						public isMirrored(): boolean;
						public applyMirroredCorrection(param0: native.Array<com.google.zxing.ResultPoint>): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class Version {
						public getDimensionForVersion(): number;
						public getAlignmentPatternCenters(): native.Array<number>;
						public static getProvisionalVersionForDimension(param0: number): com.google.zxing.qrcode.decoder.Version;
						public getVersionNumber(): number;
						public getECBlocksForLevel(param0: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): com.google.zxing.qrcode.decoder.Version.ECBlocks;
						public getTotalCodewords(): number;
						public static getVersionForNumber(param0: number): com.google.zxing.qrcode.decoder.Version;
						public toString(): string;
					}
					export module Version {
						export class ECB {
							public getDataCodewords(): number;
							public getCount(): number;
						}
						export class ECBlocks {
							public getNumBlocks(): number;
							public getECBlocks(): native.Array<com.google.zxing.qrcode.decoder.Version.ECB>;
							public getECCodewordsPerBlock(): number;
							public getTotalECCodewords(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class AlignmentPattern extends com.google.zxing.ResultPoint {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class AlignmentPatternFinder {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPoint.d.ts" />
/// <reference path="./com.google.zxing.ResultPointCallback.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.common.DetectorResult.d.ts" />
/// <reference path="./com.google.zxing.qrcode.detector.AlignmentPattern.d.ts" />
/// <reference path="./com.google.zxing.qrcode.detector.FinderPatternInfo.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class Detector {
						public processFinderPatternInfo(param0: com.google.zxing.qrcode.detector.FinderPatternInfo): com.google.zxing.common.DetectorResult;
						public getImage(): com.google.zxing.common.BitMatrix;
						public detect(param0: javautilMap<any,any>): com.google.zxing.common.DetectorResult;
						public findAlignmentInRegion(param0: number, param1: number, param2: number, param3: number): com.google.zxing.qrcode.detector.AlignmentPattern;
						public getResultPointCallback(): com.google.zxing.ResultPointCallback;
						public constructor(param0: com.google.zxing.common.BitMatrix);
						public detect(): com.google.zxing.common.DetectorResult;
						public calculateModuleSize(param0: com.google.zxing.ResultPoint, param1: com.google.zxing.ResultPoint, param2: com.google.zxing.ResultPoint): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class FinderPattern extends com.google.zxing.ResultPoint {
						public getEstimatedModuleSize(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.ResultPointCallback.d.ts" />
/// <reference path="./com.google.zxing.common.BitMatrix.d.ts" />
/// <reference path="./com.google.zxing.qrcode.detector.FinderPattern.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class FinderPatternFinder {
						public static MIN_SKIP: number;
						public static MAX_MODULES: number;
						public static foundPatternCross(param0: native.Array<number>): boolean;
						public handlePossibleCenter(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public getImage(): com.google.zxing.common.BitMatrix;
						public constructor(param0: com.google.zxing.common.BitMatrix, param1: com.google.zxing.ResultPointCallback);
						public getPossibleCenters(): javautilList<any>;
						public constructor(param0: com.google.zxing.common.BitMatrix);
					}
					export module FinderPatternFinder {
						export class CenterComparator {
							public compare(param0: com.google.zxing.qrcode.detector.FinderPattern, param1: com.google.zxing.qrcode.detector.FinderPattern): number;
						}
						export class FurthestFromAverageComparator {
							public compare(param0: com.google.zxing.qrcode.detector.FinderPattern, param1: com.google.zxing.qrcode.detector.FinderPattern): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.qrcode.detector.FinderPattern.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class FinderPatternInfo {
						public getBottomLeft(): com.google.zxing.qrcode.detector.FinderPattern;
						public constructor(param0: native.Array<com.google.zxing.qrcode.detector.FinderPattern>);
						public getTopRight(): com.google.zxing.qrcode.detector.FinderPattern;
						public getTopLeft(): com.google.zxing.qrcode.detector.FinderPattern;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class BlockPair {
						public getDataBytes(): native.Array<number>;
						public getErrorCorrectionBytes(): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class ByteMatrix {
						public set(param0: number, param1: number, param2: number): void;
						public get(param0: number, param1: number): number;
						public getWidth(): number;
						public set(param0: number, param1: number, param2: boolean): void;
						public clear(param0: number): void;
						public getHeight(): number;
						public constructor(param0: number, param1: number);
						public getArray(): native.Array<native.Array<number>>;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.d.ts" />
/// <reference path="./com.google.zxing.qrcode.decoder.Mode.d.ts" />
/// <reference path="./com.google.zxing.qrcode.encoder.QRCode.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class Encoder {
						public static chooseMode(param0: string): com.google.zxing.qrcode.decoder.Mode;
						public static encode(param0: string, param1: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel, param2: javautilMap<any,any>): com.google.zxing.qrcode.encoder.QRCode;
						public static encode(param0: string, param1: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): com.google.zxing.qrcode.encoder.QRCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class MaskUtil {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class MatrixUtil {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.d.ts" />
/// <reference path="./com.google.zxing.qrcode.decoder.Mode.d.ts" />
/// <reference path="./com.google.zxing.qrcode.decoder.Version.d.ts" />
/// <reference path="./com.google.zxing.qrcode.encoder.ByteMatrix.d.ts" />
declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class QRCode {
						public static NUM_MASK_PATTERNS: number;
						public constructor();
						public setMode(param0: com.google.zxing.qrcode.decoder.Mode): void;
						public setVersion(param0: com.google.zxing.qrcode.decoder.Version): void;
						public static isValidMaskPattern(param0: number): boolean;
						public setMaskPattern(param0: number): void;
						public setMatrix(param0: com.google.zxing.qrcode.encoder.ByteMatrix): void;
						public toString(): string;
						public getMatrix(): com.google.zxing.qrcode.encoder.ByteMatrix;
						public getMaskPattern(): number;
						public getVersion(): com.google.zxing.qrcode.decoder.Version;
						public setECLevel(param0: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): void;
						public getMode(): com.google.zxing.qrcode.decoder.Mode;
						public getECLevel(): com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
					}
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
import androidutilAttributeSet = android.util.AttributeSet;
import androidgraphicsRect = android.graphics.Rect;
import androidhardwareCamera = android.hardware.Camera;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.hardware.Camera.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./me.dm7.barcodescanner.core.CameraWrapper.d.ts" />
/// <reference path="./me.dm7.barcodescanner.core.IViewFinder.d.ts" />
declare module me {
	export module dm7 {
		export module barcodescanner {
			export module core {
				export abstract class BarcodeScannerView {
					public setBorderAlpha(param0: number): void;
					public setMaskColor(param0: number): void;
					public toggleFlash(): void;
					public setBorderStrokeWidth(param0: number): void;
					public stopCamera(): void;
					public setBorderCornerRadius(param0: number): void;
					public setShouldScaleToFill(param0: boolean): void;
					public getFramingRectInPreview(param0: number, param1: number): androidgraphicsRect;
					public getRotationCount(): number;
					public setupLayout(param0: me.dm7.barcodescanner.core.CameraWrapper): void;
					public createViewFinderView(param0: androidcontentContext): me.dm7.barcodescanner.core.IViewFinder;
					public startCamera(param0: number): void;
					public setLaserColor(param0: number): void;
					public startCamera(): void;
					public setLaserEnabled(param0: boolean): void;
					public setBorderColor(param0: number): void;
					public setSquareViewFinder(param0: boolean): void;
					public setIsBorderCornerRounded(param0: boolean): void;
					public setAutoFocus(param0: boolean): void;
					public setFlash(param0: boolean): void;
					public resumeCameraPreview(): void;
					public getFlash(): boolean;
					public setAspectTolerance(param0: number): void;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public setupCameraPreview(param0: me.dm7.barcodescanner.core.CameraWrapper): void;
					public stopCameraPreview(): void;
					public constructor(param0: androidcontentContext);
					public setBorderLineLength(param0: number): void;
					public getRotatedData(param0: native.Array<number>, param1: androidhardwareCamera): native.Array<number>;
				}
			}
		}
	}
}

declare module me {
	export module dm7 {
		export module barcodescanner {
			export module core {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./me.dm7.barcodescanner.core.BarcodeScannerView.d.ts" />
declare module me {
	export module dm7 {
		export module barcodescanner {
			export module core {
				export class CameraHandlerThread {
					public constructor(param0: me.dm7.barcodescanner.core.BarcodeScannerView);
					public startCamera(param0: number): void;
				}
			}
		}
	}
}

import androidhardwareCameraPreviewCallback = android.hardware.Camera.PreviewCallback;
import androidviewSurfaceHolder = android.view.SurfaceHolder;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./me.dm7.barcodescanner.core.CameraWrapper.d.ts" />
declare module me {
	export module dm7 {
		export module barcodescanner {
			export module core {
				export class CameraPreview {
					public setAutoFocus(param0: boolean): void;
					public setCamera(param0: me.dm7.barcodescanner.core.CameraWrapper, param1: androidhardwareCameraPreviewCallback): void;
					public showCameraPreview(): void;
					public constructor(param0: androidcontentContext, param1: me.dm7.barcodescanner.core.CameraWrapper, param2: androidhardwareCameraPreviewCallback);
					public setShouldScaleToFill(param0: boolean): void;
					public surfaceChanged(param0: androidviewSurfaceHolder, param1: number, param2: number, param3: number): void;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: me.dm7.barcodescanner.core.CameraWrapper, param3: androidhardwareCameraPreviewCallback);
					public setAspectTolerance(param0: number): void;
					public init(param0: me.dm7.barcodescanner.core.CameraWrapper, param1: androidhardwareCameraPreviewCallback): void;
					public safeAutoFocus(): void;
					public setupCameraParameters(): void;
					public surfaceCreated(param0: androidviewSurfaceHolder): void;
					public stopCameraPreview(): void;
					public getDisplayOrientation(): number;
					public surfaceDestroyed(param0: androidviewSurfaceHolder): void;
				}
			}
		}
	}
}

/// <reference path="./android.hardware.Camera.d.ts" />
declare module me {
	export module dm7 {
		export module barcodescanner {
			export module core {
				export class CameraUtils {
					public static getCameraInstance(param0: number): androidhardwareCamera;
					public constructor();
					public static isFlashSupported(param0: androidhardwareCamera): boolean;
					public static getDefaultCameraId(): number;
					public static getCameraInstance(): androidhardwareCamera;
				}
			}
		}
	}
}

/// <reference path="./android.hardware.Camera.d.ts" />
declare module me {
	export module dm7 {
		export module barcodescanner {
			export module core {
				export class CameraWrapper {
					public mCamera: androidhardwareCamera;
					public mCameraId: number;
					public static getWrapper(param0: androidhardwareCamera, param1: number): me.dm7.barcodescanner.core.CameraWrapper;
				}
			}
		}
	}
}

import androidgraphicsPoint = android.graphics.Point;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
declare module me {
	export module dm7 {
		export module barcodescanner {
			export module core {
				export class DisplayUtils {
					public static getScreenResolution(param0: androidcontentContext): androidgraphicsPoint;
					public constructor();
					public static getScreenOrientation(param0: androidcontentContext): number;
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Rect.d.ts" />
declare module me {
	export module dm7 {
		export module barcodescanner {
			export module core {
				export class IViewFinder {
					/**
					 * Constructs a new instance of the me.dm7.barcodescanner.core.IViewFinder interface with the provided implementation.
					 */
					public constructor(implementation: {
						setLaserColor(param0: number): void;
						setMaskColor(param0: number): void;
						setBorderColor(param0: number): void;
						setBorderStrokeWidth(param0: number): void;
						setBorderLineLength(param0: number): void;
						setLaserEnabled(param0: boolean): void;
						setBorderCornerRounded(param0: boolean): void;
						setBorderAlpha(param0: number): void;
						setBorderCornerRadius(param0: number): void;
						setViewFinderOffset(param0: number): void;
						setSquareViewFinder(param0: boolean): void;
						setupViewFinder(): void;
						getFramingRect(): androidgraphicsRect;
						getWidth(): number;
						getHeight(): number;
					});
					public setBorderAlpha(param0: number): void;
					public setMaskColor(param0: number): void;
					public getFramingRect(): androidgraphicsRect;
					public getHeight(): number;
					public setupViewFinder(): void;
					public setViewFinderOffset(param0: number): void;
					public getWidth(): number;
					public setBorderStrokeWidth(param0: number): void;
					public setBorderCornerRadius(param0: number): void;
					public setLaserColor(param0: number): void;
					public setLaserEnabled(param0: boolean): void;
					public setBorderCornerRounded(param0: boolean): void;
					public setBorderLineLength(param0: number): void;
					public setBorderColor(param0: number): void;
					public setSquareViewFinder(param0: boolean): void;
				}
			}
		}
	}
}

import androidgraphicsCanvas = android.graphics.Canvas;
import androidgraphicsPaint = android.graphics.Paint;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module me {
	export module dm7 {
		export module barcodescanner {
			export module core {
				export class ViewFinderView {
					public mLaserPaint: androidgraphicsPaint;
					public mFinderMaskPaint: androidgraphicsPaint;
					public mBorderPaint: androidgraphicsPaint;
					public mBorderLineLength: number;
					public mSquareViewFinder: boolean;
					public setBorderAlpha(param0: number): void;
					public setMaskColor(param0: number): void;
					public getFramingRect(): androidgraphicsRect;
					public drawViewFinderBorder(param0: androidgraphicsCanvas): void;
					public getHeight(): number;
					public onDraw(param0: androidgraphicsCanvas): void;
					public setupViewFinder(): void;
					public setViewFinderOffset(param0: number): void;
					public getWidth(): number;
					public setBorderStrokeWidth(param0: number): void;
					public setBorderCornerRadius(param0: number): void;
					public updateFramingRect(): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public setLaserColor(param0: number): void;
					public constructor(param0: androidcontentContext);
					public setLaserEnabled(param0: boolean): void;
					public setBorderCornerRounded(param0: boolean): void;
					public drawLaser(param0: androidgraphicsCanvas): void;
					public setBorderLineLength(param0: number): void;
					public drawViewFinderMask(param0: androidgraphicsCanvas): void;
					public setBorderColor(param0: number): void;
					public setSquareViewFinder(param0: boolean): void;
				}
			}
		}
	}
}

declare module me {
	export module dm7 {
		export module barcodescanner {
			export module zxing {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

import comgooglezxingPlanarYUVLuminanceSource = com.google.zxing.PlanarYUVLuminanceSource;
import comgooglezxingResult = com.google.zxing.Result;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.hardware.Camera.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.google.zxing.PlanarYUVLuminanceSource.d.ts" />
/// <reference path="./com.google.zxing.Result.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module me {
	export module dm7 {
		export module barcodescanner {
			export module zxing {
				export class ZXingScannerView extends me.dm7.barcodescanner.core.BarcodeScannerView {
					public static ALL_FORMATS: javautilList<any>;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public getFormats(): javautilCollection<any>;
					public setFormats(param0: javautilList<any>): void;
					public resumeCameraPreview(): void;
					public resumeCameraPreview(param0: me.dm7.barcodescanner.zxing.ZXingScannerView.ResultHandler): void;
					public onPreviewFrame(param0: native.Array<number>, param1: androidhardwareCamera): void;
					public buildLuminanceSource(param0: native.Array<number>, param1: number, param2: number): comgooglezxingPlanarYUVLuminanceSource;
					public constructor(param0: androidcontentContext);
					public setResultHandler(param0: me.dm7.barcodescanner.zxing.ZXingScannerView.ResultHandler): void;
				}
				export module ZXingScannerView {
					export class ResultHandler {
						/**
						 * Constructs a new instance of the me.dm7.barcodescanner.zxing.ZXingScannerView$ResultHandler interface with the provided implementation.
						 */
						public constructor(implementation: {
							handleResult(param0: comgooglezxingResult): void;
						});
						public handleResult(param0: comgooglezxingResult): void;
					}
				}
			}
		}
	}
}

