import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';
import { Subscription, Observable } from 'rxjs';
import { Books } from 'src/app/models/books';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit, OnDestroy {


  listBooks: Books[];
  subscription: Subscription;
  constructor(private booksServ: BooksService) {
  }

  ngOnInit() {
    this.subscription = this.booksServ.getBooks().subscribe(data => {
      this.listBooks = data;
    });
  }




  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
