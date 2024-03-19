import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Categories } from 'src/app/models/Categories';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  @ViewChild("editCategoryForm") editCategoryForm: NgForm;
  category: Categories = {
    categoryId: 0,
    categoryName: '',
    description: '',
    books: []
  };
  categoryId: number;
  editCategorySubs: Subscription;
  launchEditSubs: Subscription;
  subscriptionParams: Subscription;
  constructor(private categoryServ: CategoriesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe((params: { id: number }) => {
      this.categoryId = params.id;
      this.launchEditSubs = this.categoryServ.findCategoryById(this.categoryId).subscribe(response => {
        this.category = response;
      });
    });
  }


  onSubmit() {
    this.editCategorySubs = this.categoryServ.updateCategory(this.category).subscribe(() => {
      this.router.navigateByUrl("/categories");
    });
  }

  ngOnDestroy() {
    if (this.editCategorySubs) {
      this.editCategorySubs.unsubscribe();
    }
    this.subscriptionParams.unsubscribe();
    this.launchEditSubs.unsubscribe();

  }

}
