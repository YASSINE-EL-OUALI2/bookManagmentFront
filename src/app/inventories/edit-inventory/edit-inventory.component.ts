import { Component, OnDestroy, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/Inventory';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit, OnDestroy {

  inventory: Inventory={
    inventoryId: 0,
    dateAdded: new Date(),
    shelfLocation: '',
    condition: '',
    books: []
  };

  constructor() {

  }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.inventory);
  }

  ngOnDestroy() {

  }

}
