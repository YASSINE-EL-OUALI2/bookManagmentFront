import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(protected storageServ: StorageService,
    private router: Router) { }



  ngOnInit() {
    if (!this.storageServ.isLoggedIn()) {
      this.router.navigateByUrl("login");
    }
  }

}
