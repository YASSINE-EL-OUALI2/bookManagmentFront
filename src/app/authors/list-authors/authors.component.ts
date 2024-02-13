import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Authors } from 'src/app/models/Authors';
import { AuthorFilterPipe } from 'src/app/pipes/authors/author-filter.pipe';
import { AuthorsService } from 'src/app/services/authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorFilterPipe]
})
export class AuthorsComponent implements OnInit,OnDestroy {

  searchText: string;
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
