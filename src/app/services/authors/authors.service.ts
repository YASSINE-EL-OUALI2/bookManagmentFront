import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authors } from 'src/app/models/Authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiUrl: string = "http://localhost:8080/api/authors";

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Authors[]> {
    return this.http.get<Authors[]>(this.apiUrl + "/getall");
  }
  findAuthorById(authorId: number): Observable<Authors> {
    return this.http.get<Authors>(this.apiUrl + "/getbyid?id=" + authorId);
  }

  addAuthor(author: Authors): Observable<Authors> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Authors>(this.apiUrl + "/addauthor", author, httpOptions);
  }

  updateAuthor(author: Authors): Observable<Authors> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Authors>(this.apiUrl + "/updateauthor", author, httpOptions);
  }

  deleteAuthor(author: Authors) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: author
    };
    return this.http.delete(this.apiUrl + "/deleteauthor", httpOptions);

  }

}
