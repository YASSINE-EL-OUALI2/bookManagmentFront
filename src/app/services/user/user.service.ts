import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = "http://localhost:8080/api/test";

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<string> {
    return this.http.get(this.apiUrl + "/all", { responseType: "text" });
  }

  getUserAccess(): Observable<string> {
    return this.http.get(this.apiUrl + "/user", { responseType: "text" });
  }

  getModeratorBoard(): Observable<string> {
    return this.http.get(this.apiUrl + "/mod", { responseType: "text" });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.apiUrl + "/admin", { responseType: "text" });
  }

}
