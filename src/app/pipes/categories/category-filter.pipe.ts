import { Pipe, PipeTransform } from '@angular/core';
import { Categories } from 'src/app/models/Categories';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(categories: Categories[], searchText: string): Categories[] {
    if (!categories || !searchText) {
      return categories;
    }

    searchText = searchText.toLowerCase();

    return categories.filter(category => {
      return category.categoryName.toLowerCase().includes(searchText);
    });
  }

}
