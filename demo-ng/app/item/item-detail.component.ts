import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {Item} from "./item";
import {ItemService} from "./item.service";

@Component({
  selector: "ns-details",
  moduleId: module.id,
  templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.item = this.itemService.getItem(id);
  }

  onScanResult(evt) {
    console.log("App event");
    console.log(evt.object);
    console.log(evt.format);
    console.log(evt.text);
  }
}
