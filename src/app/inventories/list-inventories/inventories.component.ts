import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Inventory } from 'src/app/models/Inventory';
import { InventoriesService } from 'src/app/services/inventories/inventories.service';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit, OnDestroy {

  listInventories: Inventory[];
  subscription: Subscription


  constructor(private inventoriesServ: InventoriesService){

  }

  ngOnInit() {
    this.subscription = this.inventoriesServ.getInventories().subscribe(data=>{
      this.listInventories = data;
    });
  }




  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
