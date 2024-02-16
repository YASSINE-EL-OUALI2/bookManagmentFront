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
  subscription: Subscription;
  subscriptionDel: Subscription;
  inventoryDel: Inventory;


  constructor(private inventoriesServ: InventoriesService) {
  }

  ngOnInit() {
    this.subscription = this.inventoriesServ.getInventories().subscribe(data => {
      this.listInventories = data;
    });
  }

  deleteInventory(inventoryId: number) {
    this.listInventories.map(item => {
      if (item.inventoryId == inventoryId) {
        this.inventoryDel = item;
        return;
      }
    });
    this.subscriptionDel = this.inventoriesServ.deleteInventory(this.inventoryDel).subscribe(() => {
      this.ngOnInit();
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.subscriptionDel) {
      this.subscriptionDel.unsubscribe();
    }
  }

}
