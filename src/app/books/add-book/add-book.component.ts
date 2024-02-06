import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Authors } from 'src/app/models/Authors';
import { Categories } from 'src/app/models/Categories';
import { Books } from 'src/app/models/books';
import { AuthorsService } from 'src/app/services/authors/authors.service';
import { BooksService } from 'src/app/services/books/books.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, OnDestroy {
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
  subscription: Subscription;
  categoriesSubscription: Subscription;
  authorsSucscription: Subscription;
  subscriptionParams: Subscription;
  createSubscription: Subscription;

  constructor(private booksServ: BooksService,
    private categoryServ: CategoriesService,
    private authorServ: AuthorsService,
    private router: Router) {
  }

  ngOnInit() {
    this.categoriesSubscription = this.categoryServ.getCategories().subscribe(categories => {
      this.listCategories = categories;
    });
    this.authorsSucscription = this.authorServ.getAuthors().subscribe(authors => {
      this.listAuthors = authors;
    });
  }

  onSubmit() {
    console.log(this.book);
    this.createSubscription = this.booksServ.addBook(this.book).subscribe(response => {
      console.log("created successfully. ", response);
      this.router.navigateByUrl("/books");
    });
  }


  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
    this.authorsSucscription.unsubscribe();
    if (this.createSubscription) {
      this.createSubscription.unsubscribe();
    }
  }

}
