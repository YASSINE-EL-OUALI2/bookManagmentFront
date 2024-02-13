import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Inventory } from 'src/app/models/Inventory';
import { InventoriesService } from 'src/app/services/inventories/inventories.service';
import { InventoryFilterPipe } from './../../pipes/inventories/inventory-filter.pipe';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css'],
  providers: [InventoryFilterPipe]
})
export class InventoriesComponent implements OnInit, OnDestroy {

  searchText: string;
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
