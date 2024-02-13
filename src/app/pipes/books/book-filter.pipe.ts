import { Pipe, PipeTransform } from '@angular/core';
import { Books } from '../../models/books';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Books[], searchText: string): Books[] {
    if (!books || !searchText) {
      return books;
    }

    searchText = searchText.toLowerCase();

    return books.filter(book => {
      return (book.title.toLowerCase().includes(searchText) ||
        (book.author && book.author.authorName.toLowerCase().includes(searchText)) ||
        (book.category && book.category.categoryName.toLowerCase().includes(searchText)) ||
        book.isbn.toLowerCase().includes(searchText) ||
        book.publisherName.toLowerCase().includes(searchText)
      );
    });
  }

}
