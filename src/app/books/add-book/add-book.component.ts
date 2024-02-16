import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Authors } from 'src/app/models/Authors';
import { Categories } from 'src/app/models/Categories';
import { Inventory } from 'src/app/models/Inventory';
import { Books } from 'src/app/models/books';
import { AuthorsService } from 'src/app/services/authors/authors.service';
import { BooksService } from 'src/app/services/books/books.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { InventoriesService } from 'src/app/services/inventories/inventories.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, OnDestroy {
  @ViewChild("addBookForm") addBookForm: NgForm;
  book: Books = {
    bookId: 0,
    title: '',
    author: {
      authorId: null,
      authorName: '',
      biography: '',
      books: []
    },
    category: {
      categoryId: null,
      categoryName: '',
      description: '',
      books: []
    },
    inventory: {
      inventoryId: 0,
      dateAdded: '',
      shelfLocation: '',
      condition: '',
      books: []
    },
    isbn: '',
    publisherName: '',
    publicationDate: null,
    quantityAvailable: 0,
    price: 0
  }
  listCategories: Categories[];
  listAuthors: Authors[];
  ListInventories: Inventory[];
  subscription: Subscription;
  categoriesSubscription: Subscription;
  authorsSucscription: Subscription;
  inventorySubscription: Subscription;
  subscriptionParams: Subscription;
  createSubscription: Subscription;

  constructor(private booksServ: BooksService,
    private categoryServ: CategoriesService,
    private authorServ: AuthorsService,
    private inventoriesServ: InventoriesService,
    private router: Router) {
  }

  ngOnInit() {
    this.categoriesSubscription = this.categoryServ.getCategories().subscribe(categories => {
      this.listCategories = categories;
    });
    this.authorsSucscription = this.authorServ.getAuthors().subscribe(authors => {
      this.listAuthors = authors;
    });
    this.inventorySubscription = this.inventoriesServ.getInventories().subscribe(inventories => {
      this.ListInventories = inventories;
    });
  }

  onSubmit() {
    console.log(this.book);
    if (this.addBookForm.valid) {
      this.book.publicationDate = formatDate(this.book.publicationDate, "yyyy-MM-dd", "en-US");
      this.createSubscription = this.booksServ.addBook(this.book).subscribe(response => {
        console.log("book created successfully. ", response);
        this.router.navigateByUrl("/books");
      });
    }
  }


  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
    this.authorsSucscription.unsubscribe();
    this.inventorySubscription.unsubscribe();
    if (this.createSubscription) {
      this.createSubscription.unsubscribe();
    }
  }

}
