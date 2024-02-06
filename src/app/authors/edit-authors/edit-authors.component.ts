import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Authors } from 'src/app/models/Authors';
import { Books } from 'src/app/models/books';
import { AuthorsService } from 'src/app/services/authors/authors.service';

@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.css']
})
export class EditAuthorsComponent implements OnInit, OnDestroy {

  author: Authors = {
    authorId: 0,
    authorName: '',
    biography: '',
    books: []
  };
  authorId: number;
  listBooks: Books[];
  subscriptionParams: Subscription;
  subscription: Subscription;
  constructor(private authorsServ: AuthorsService,
    private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe((params: { id: number }) => {
      this.authorId = params.id;
      this.subscription = this.authorsServ.findAuthorById(this.authorId).subscribe(item=>{
        this.author = item;
      });

    });
  }


  onSubmit() {

  }
  ngOnDestroy() {

  }

}
