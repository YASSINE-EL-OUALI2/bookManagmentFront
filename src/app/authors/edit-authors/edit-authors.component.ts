import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  @ViewChild("editAuthorForm") editAuthorForm: NgForm;
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
  updateSubscription: Subscription;
  constructor(private authorsServ: AuthorsService,
    private route: ActivatedRoute,
    private router: Router) {

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
    this.updateSubscription = this.authorsServ.updateAuthor(this.author).subscribe(response=>{
      console.log("author updated" + response);
      this.router.navigateByUrl("/authors");
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionParams.unsubscribe();
    if(this.updateSubscription){
      this.updateSubscription.unsubscribe();
    }
  }

}
