import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authors } from 'src/app/models/Authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiUrl: string ="http://localhost:8080/authors";

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Authors[]>{
    return this.http.get<Authors[]>(this.apiUrl + "/getall");
  }
  findAuthorById(authorId: number): Observable<Authors> {
    return this.http.get<Authors>(this.apiUrl + "/getbyid?id=" + authorId);
  }

}
