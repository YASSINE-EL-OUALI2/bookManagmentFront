import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsComponent } from './authors/list-authors/authors.component';
import { CategoriesComponent } from './categories/list-categories/categories.component';
import { InventoriesComponent } from './inventories/list-inventories/inventories.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { EditAuthorsComponent } from './authors/edit-authors/edit-authors.component';
import { EditInventoryComponent } from './inventories/edit-inventory/edit-inventory.component';
import { FormsModule } from '@angular/forms';
import { AddInventoryComponent } from './inventories/add-inventory/add-inventory.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { BookFilterPipe } from './pipes/books/book-filter.pipe';
import { CategoryFilterPipe } from './pipes/categories/category-filter.pipe';
import { InventoryFilterPipe } from './pipes/inventories/inventory-filter.pipe';
import { AuthorFilterPipe } from './pipes/authors/author-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { httpInterceptorProviders } from './_helpers/auth.interceptor';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditBookComponent,
    ListBooksComponent,
    AuthorsComponent,
    CategoriesComponent,
    InventoriesComponent,
    EditCategoryComponent,
    EditAuthorsComponent,
    EditInventoryComponent,
    AddInventoryComponent,
    AddCategoryComponent,
    AddBookComponent,
    AddAuthorComponent,
    BookFilterPipe,
    CategoryFilterPipe,
    InventoryFilterPipe,
    AuthorFilterPipe,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
