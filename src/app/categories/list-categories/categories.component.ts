import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categories } from 'src/app/models/Categories';
import { CategoryFilterPipe } from 'src/app/pipes/categories/category-filter.pipe';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers:[CategoryFilterPipe]
})
export class CategoriesComponent implements OnInit, OnDestroy {

  searchText: string;
  listCategories: Categories[];
  subscription: Subscription;
  constructor(private categoryServ: CategoriesService,
    protected storageServ: StorageService) {

  }
  ngOnInit() {
    this.subscription = this.categoryServ.getCategories().subscribe(data => {
      this.listCategories = data;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
