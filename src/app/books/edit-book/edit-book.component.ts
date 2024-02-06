import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Authors } from 'src/app/models/Authors';
import { Categories } from 'src/app/models/Categories';
import { Books } from 'src/app/models/books';
import { AuthorsService } from 'src/app/services/authors/authors.service';
import { BooksService } from 'src/app/services/books/books.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit, OnDestroy {

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
    inventoryid: 0,
    isbn: '',
    publisherName: '',
    publicationYear: 0,
    quantityAvailable: 0,
    price: 0
  }
  listCategories: Categories[];
  listAuthors: Authors[];
  bookId: number;
  subscription: Subscription;
  categoriesSubscription: Subscription;
  authorsSucscription: Subscription;
  subscriptionParams: Subscription;
  updateSubscription: Subscription;

  constructor(private booksServ: BooksService,
    private categoryServ: CategoriesService,
    private authorServ: AuthorsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe((params: { id: number }) => {
      this.bookId = params.id;
      this.subscription = this.booksServ.findBookById(this.bookId).subscribe(data => {
        this.book = data;
        this.categoriesSubscription = this.categoryServ.getCategories().subscribe(categories => {
          this.listCategories = categories;
        });
        this.authorsSucscription = this.authorServ.getAuthors().subscribe(authors => {
          this.listAuthors = authors;
        });
      });
    });
  }

  onSubmit() {
    console.log(this.book);
    this.updateSubscription = this.booksServ.updateBook(this.book).subscribe(response => {
      console.log("updated successfully. ", response);
      this.router.navigateByUrl("/books");
    });
  }








  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
    this.authorsSucscription.unsubscribe();
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
    this.subscription.unsubscribe();
    this.subscriptionParams.unsubscribe();
  }
}
