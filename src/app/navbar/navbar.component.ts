import { Component, OnDestroy } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  logOutSubsc: Subscription;

  constructor(protected storageServ: StorageService,
    private authServ: AuthService,
    private router: Router) { }

  navLinks: { path: string; label: string }[] = [
    { path: '/home', label: 'Home' },
    { path: '/books', label: 'Books' },
    { path: '/authors', label: 'Authors' },
    { path: '/categories', label: 'Categories' },
    { path: '/inventories', label: 'Inventories' },
  ];

  logout() {
    this.logOutSubsc = this.authServ.logout().subscribe({
      next: () => {
        this.storageServ.clean();
        this.router.navigateByUrl("/login");
      }
    })
  }

  ngOnDestroy() {
    if (this.logOutSubsc) {
      this.logOutSubsc.unsubscribe();
    }
  }


}
