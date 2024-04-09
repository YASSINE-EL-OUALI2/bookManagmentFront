import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(protected storageServ: StorageService,
    private router: Router) { }



  ngOnInit() {
    if (!this.storageServ.isLoggedIn()) {
      this.router.navigateByUrl("login");
    }
  }
}
