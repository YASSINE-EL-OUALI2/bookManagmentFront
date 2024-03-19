import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  user = {
    username: '',
    email: '',
    password: ''
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  subscription: Subscription;

  constructor(private authServ: AuthService){}


  onSubmit(){
    const {username, email, password} = this.user;

    this.subscription = this.authServ.register(username, email, password).subscribe({
      next: ()=>{
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err=>{
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;

      }

    });
  }



  ngOnDestroy() {
  }
}
