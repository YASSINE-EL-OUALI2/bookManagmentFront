import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { AuthorsComponent } from './authors/list-authors/authors.component';
import { CategoriesComponent } from './categories/list-categories/categories.component';
import { InventoriesComponent } from './inventories/list-inventories/inventories.component';
import { EditAuthorsComponent } from './authors/edit-authors/edit-authors.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { EditInventoryComponent } from './inventories/edit-inventory/edit-inventory.component';
import { AddInventoryComponent } from './inventories/add-inventory/add-inventory.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'books', component: ListBooksComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'editBook/:id', component: EditBookComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'addAuthor', component: AddAuthorComponent },
  { path: 'editAuthor/:id', component: EditAuthorsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'editCategory/:id', component: EditCategoryComponent },
  { path: 'inventories', component: InventoriesComponent },
  { path: 'addInventory', component: AddInventoryComponent },
  { path: 'editInventory/:id', component: EditInventoryComponent }

  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
