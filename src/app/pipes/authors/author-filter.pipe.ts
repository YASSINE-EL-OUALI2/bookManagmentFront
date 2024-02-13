import { Pipe, PipeTransform } from '@angular/core';
import { Authors } from 'src/app/models/Authors';

@Pipe({
  name: 'authorFilter'
})
export class AuthorFilterPipe implements PipeTransform {

  transform(authors: Authors[], searchText: string): Authors[] {
    if (!authors || !searchText) {
      return authors;
    }

    searchText = searchText.toLowerCase();

    return authors.filter(author => {
      return author.authorName.toLowerCase().includes(searchText);
    });
  }


}
