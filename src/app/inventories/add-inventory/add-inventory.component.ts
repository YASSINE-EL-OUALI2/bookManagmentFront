import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Inventory } from 'src/app/models/Inventory';
import { InventoriesService } from 'src/app/services/inventories/inventories.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent  implements OnInit, OnDestroy {

  inventory: Inventory = {
    inventoryId: 0,
    dateAdded: null,
    shelfLocation: '',
    condition: '',
    books: []
  };
  subscriptionAdd: Subscription;

  constructor(private inventoryServ: InventoriesService,
    private router: Router){}

  ngOnInit() {
  }

  onSubmit(){
    this.subscriptionAdd = this.inventoryServ.addInventory(this.inventory).subscribe(response=>{
      console.log("inventory added succesfully. " + response);
      this.router.navigateByUrl("/inventories");
    });

  }

  ngOnDestroy() {
    this.subscriptionAdd.unsubscribe();
  }

}
