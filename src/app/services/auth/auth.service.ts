import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/Users';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = "http://localhost:8080/api/auth";


  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Users> {
    return this.http.post<Users>(this.apiUrl + "/signin",
      {
        username,
        password
      }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<Users> {
    return this.http.post<Users>(this.apiUrl + "/signup",
      { username, email, password },
      httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(this.apiUrl + "/signout", {}, httpOptions);
  }

  extractToken(token: string) {
    if (token != "") return token.match(/=(.*?);/)[1];
    return null;
  }
}
