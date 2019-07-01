import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.clickable {cursor: pointer}'
  ],
})

export class HeaderComponent {
  private userSub: Subscription;
  private isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogOut() {
    this.authService.logOut();
  }
}
