import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl: string = "http://localhost:8080/categories";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.apiUrl + "/getall");
  }
  findCategoryById(categoryId: number): Observable<Categories> {
    return this.http.get<Categories>(this.apiUrl + "/getbyid?id=" + categoryId);
  }
}
