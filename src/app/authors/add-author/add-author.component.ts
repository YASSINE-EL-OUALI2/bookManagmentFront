import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Authors } from 'src/app/models/Authors';
import { AuthorsService } from './../../services/authors/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnDestroy {

  @ViewChild("addAuthorForm") addAuthorForm: NgForm;
  author: Authors = {
    authorId: 0,
    authorName: '',
    biography: '',
    books: []
  };
  addSubscription: Subscription;
  constructor(private authorsServ: AuthorsService,
    private router: Router) {

  }
  onSubmit() {
    this.addSubscription = this.authorsServ.addAuthor(this.author).subscribe(() => {
      this.router.navigateByUrl("/authors");
    });
  }

  ngOnDestroy() {
    if (this.addSubscription) {
      this.addSubscription.unsubscribe();
    }
  }


}
