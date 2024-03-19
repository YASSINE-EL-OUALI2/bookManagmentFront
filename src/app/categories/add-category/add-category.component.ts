import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Categories } from 'src/app/models/Categories';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  @ViewChild("addCategoryForm") addCategoryForm: NgForm;
  category: Categories = {
    categoryId: 0,
    categoryName: '',
    description: '',
    books: []
  };
  addCategorySubs: Subscription;

  constructor(private categoryServ: CategoriesService,
    private router: Router) { }

  onSubmit() {
    this.addCategorySubs = this.categoryServ.addCategory(this.category).subscribe(() => {
      this.router.navigateByUrl("/categories");
    });
  }


  ngOnDestroy() {
    if (this.addCategorySubs) {
      this.addCategorySubs.unsubscribe();
    }
  }

}
