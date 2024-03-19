import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Inventory } from 'src/app/models/Inventory';
import { InventoriesService } from 'src/app/services/inventories/inventories.service';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit, OnDestroy {

  @ViewChild("editInventoryForm") editInventoryForm: NgForm;
  inventory: Inventory = {
    inventoryId: 0,
    dateAdded: null,
    shelfLocation: '',
    condition: '',
    books: []
  };
  inventoryId: number;
  editInventorySubs: Subscription;
  launchEditSubs: Subscription;
  subscriptionParams: Subscription;

  constructor(private inventoryServ: InventoriesService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe((params: { id: number }) => {
      this.inventoryId = params.id;
      this.launchEditSubs = this.inventoryServ.findInventoryById(this.inventoryId).subscribe(response => {
        response.dateAdded = formatDate(response.dateAdded, "yyyy-MM-dd", "en-US");
        this.inventory = response;
      });
    });

  }
  onSubmit() {
    this.editInventorySubs = this.inventoryServ.updateInventory(this.inventory).subscribe(() => {
      this.router.navigateByUrl("/inventories");
    });
  }

  ngOnDestroy() {
    if (this.editInventorySubs) {
      this.editInventorySubs.unsubscribe();
    }
    this.subscriptionParams.unsubscribe();
    this.launchEditSubs.unsubscribe();
  }
}
