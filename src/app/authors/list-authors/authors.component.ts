import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Authors } from 'src/app/models/Authors';
import { AuthorsService } from 'src/app/services/authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit,OnDestroy {

  listAuthors: Authors[];
  subscription: Subscription;
  constructor(private authorsServ: AuthorsService){}


  ngOnInit() {
    this.subscription = this.authorsServ.getAuthors().subscribe(data =>{
      this.listAuthors = data;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
