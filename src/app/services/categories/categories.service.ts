import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl: string = "http://localhost:8080/api/categories";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.apiUrl + "/getall");
  }

  findCategoryById(categoryId: number): Observable<Categories> {
    return this.http.get<Categories>(this.apiUrl + "/getbyid?id=" + categoryId);
  }

  addCategory(category: Categories): Observable<Categories> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Categories>(this.apiUrl + "/addcategory", category, httpOptions);
  }

  updateCategory(category: Categories): Observable<Categories> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Categories>(this.apiUrl + "/updatecategory", category, httpOptions);
  }

  deleteCategory(category: Categories) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      ReportBody: category
    };
    return this.http.delete<Categories>(this.apiUrl + "/deletecategory", httpOptions);
  }


}
