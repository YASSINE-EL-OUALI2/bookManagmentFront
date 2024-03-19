import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild("f") f: NgForm;
  user = {
    username: null,
    password: null
  };
  isLoginFailed = false;
  errorMessage = "";
  loginSubsc: Subscription

  constructor(private authServ: AuthService,
    protected storageServ: StorageService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const { username, password } = this.user;
    this.loginSubsc = this.authServ.login(username, password).subscribe({
      next: data => {
        data.jwt = this.authServ.extractToken(data.jwt);
        this.storageServ.saveUser(data);
        this.isLoginFailed = false;
        this.router.navigateByUrl("/home");
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;

      }
    })
  }


  ngOnDestroy() {
    if (this.loginSubsc) {
      this.loginSubsc.unsubscribe();
    }
  }
}
