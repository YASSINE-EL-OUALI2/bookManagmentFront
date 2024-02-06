import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categories } from 'src/app/models/Categories';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  listCategories: Categories[];
  subscription: Subscription;
  constructor(private categoryServ: CategoriesService){

  }
  ngOnInit(){
    this.subscription = this.categoryServ.getCategories().subscribe(data=>{
      this.listCategories = data;
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
