import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Inventory } from 'src/app/models/Inventory';
import { InventoriesService } from 'src/app/services/inventories/inventories.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnDestroy {

  @ViewChild("addInventoryForm") addInventoryForm: NgForm;
  inventory: Inventory = {
    inventoryId: 0,
    dateAdded: null,
    shelfLocation: '',
    condition: '',
    books: []
  };
  subscriptionAdd: Subscription;

  constructor(private inventoryServ: InventoriesService,
    private router: Router) { }


  onSubmit() {
    this.subscriptionAdd = this.inventoryServ.addInventory(this.inventory).subscribe(() => {
      this.router.navigateByUrl("/inventories");
    });

  }

  ngOnDestroy() {
    if (this.subscriptionAdd) {
      this.subscriptionAdd.unsubscribe();
    }
  }

}
