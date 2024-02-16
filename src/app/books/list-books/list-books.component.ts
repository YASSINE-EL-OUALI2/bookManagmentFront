import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';
import { Subscription, Observable } from 'rxjs';
import { Books } from 'src/app/models/books';
import { OnDestroy } from '@angular/core';
import { BookFilterPipe } from 'src/app/pipes/books/book-filter.pipe';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
  providers: [BookFilterPipe]
})
export class ListBooksComponent implements OnInit, OnDestroy {

  searchText: string;
  listBooks: Books[];
  bookDel: Books;
  subscription: Subscription;
  subscriptionDel: Subscription;
  //sorting properties
  colName: string = "";
  reverse: boolean = false;
  constructor(private booksServ: BooksService) {
  }

  ngOnInit() {
    this.subscription = this.booksServ.getBooks().subscribe(data => {
      this.listBooks = data;
      this.sort('title');
    });
  }

  //delete Book function
  deleteBook(bookId: number) {
    console.log(bookId);
    this.listBooks.map(book => {
      if (book.bookId == bookId) {
        this.bookDel = book;
        return;
      }
    });
    if (this.bookDel) {
      this.subscriptionDel = this.booksServ.deleteBook(this.bookDel).subscribe(() =>{
        this.ngOnInit();
      });

    }


  }


  //functions to handle sorting
  sort(column: string) {
    if (this.colName == column) {
      this.reverse = !this.reverse;
    } else {
      this.colName = column;
      this.reverse = false;
    }

    this.listBooks.sort((i: Books, j: Books) => {
      const a = this.getProperty(i, column).toLowerCase();
      const b = this.getProperty(j, column).toLowerCase();
      return this.reverse ? b.localeCompare(a) : a.localeCompare(b);
    });
  }
  // funct to get nested property value
  getProperty(obj: Books, path: string) {
    return path.split('.').reduce((o, key) => o[key], obj);
  }
  //end of sorting

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.bookDel) {
      this.subscriptionDel.unsubscribe();
    }
  }
}
