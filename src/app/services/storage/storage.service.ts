import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/Users';

const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: Users): void {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public getRole() {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user).roles;
    }
    return null;
  }

  public isLoggedIn(): boolean {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }

}
