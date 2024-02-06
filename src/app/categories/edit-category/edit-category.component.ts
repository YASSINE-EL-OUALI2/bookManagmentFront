import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categories } from 'src/app/models/Categories';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  category: Categories = {
    categoryId: 0,
    categoryName: '',
    description: '',
    books: []
  };
  categoryId: number;
  subscription: Subscription;

  constructor(private categoryServ: CategoriesService) { }

  ngOnInit() {

  }


  onSubmit() {

  }

  ngOnDestroy() {

  }

}
