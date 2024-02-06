import { Component } from '@angular/core';
import { Authors } from 'src/app/models/Authors';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {

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
