import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authors } from 'src/app/models/Authors';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {

  @ViewChild("addAuthorForm") addAuthorForm: NgForm;
  author: Authors={
    authorId: 0,
    authorName: '',
    biography: '',
    books: []
  };
  constructor(){

  }

  onSubmit(){

  }


}
