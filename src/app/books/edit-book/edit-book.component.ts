import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Authors } from 'src/app/models/Authors';
import { Categories } from 'src/app/models/Categories';
import { Books } from 'src/app/models/books';
import { AuthorsService } from 'src/app/services/authors/authors.service';
import { BooksService } from 'src/app/services/books/books.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { Inventory } from 'src/app/models/Inventory';
import { InventoriesService } from 'src/app/services/inventories/inventories.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit, OnDestroy {

  @ViewChild("editBookForm") editBookForm: NgForm;
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
  bookId: number;
  subscription: Subscription;
  categoriesSubscription: Subscription;
  authorsSucscription: Subscription;
  subscriptionParams: Subscription;
  updateSubscription: Subscription;
  inventorySubscription: Subscription;
  //subscriptionHold: Subscription;
  //thresHoldMessage: string;


  constructor(private booksServ: BooksService,
    private categoryServ: CategoriesService,
    private authorServ: AuthorsService,
    private inventoriesServ: InventoriesService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe((params: { id: number }) => {
      this.bookId = params.id;
      this.getBookDetails(this.bookId);
      //this.checkThresHold();
    });
  }

  getBookDetails(bookId: number) {
    this.subscription = this.booksServ.findBookById(bookId).subscribe(data => {
      data.publicationDate = formatDate(data.publicationDate, "yyyy-MM-dd", "en-US");
      this.book = data;
      this.categoriesSubscription = this.categoryServ.getCategories().subscribe(categories => {
        this.listCategories = categories;
      });
      this.authorsSucscription = this.authorServ.getAuthors().subscribe(authors => {
        this.listAuthors = authors;
      });
      this.inventorySubscription = this.inventoriesServ.getInventories().subscribe(inventories => {
        this.ListInventories = inventories;
      });
    });

  }

  /*checkThresHold() {
    this.subscriptionHold = this.booksServ.checkThreshold(this.bookId).subscribe((message: string) => {
      if (this.book.quantityAvailable < 5) {
        this.thresHoldMessage = message;
        Swal.fire({
          title: 'Notification',
          text: this.thresHoldMessage,
          icon: 'warning',
          validationMessage: 'Ok'
        });
      }
    });
  }*/

  onSubmit() {
    console.log(this.book);
    if (this.editBookForm.valid) {
      this.updateSubscription = this.booksServ.updateBook(this.book).subscribe(response => {
        console.log("updated successfully. ", response);
        this.router.navigateByUrl("/books");
      });
    }
  }








  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
    this.authorsSucscription.unsubscribe();
    this.inventorySubscription.unsubscribe();
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
    //this.subscriptionHold.unsubscribe();
    this.subscription.unsubscribe();
    this.subscriptionParams.unsubscribe();
  }
}
