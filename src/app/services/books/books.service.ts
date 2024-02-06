import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../../models/books';


@Injectable({
  providedIn: 'root'
})
export class BooksService {


  private apiUrl: string = "http://localhost:8080/books";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.apiUrl + "/getall");
  }
  findBookById(bookId: number): Observable<Books> {
    return this.http.get<Books>(this.apiUrl + "/getbyid?id=" + bookId);
  }
  addBook(book: Books): Observable<Books> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Books>(this.apiUrl + "/addbook", book, httpOptions);
  }

  updateBook(book: Books): Observable<Books> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Books>(this.apiUrl + "/updatebook", book, httpOptions);
  }
}
