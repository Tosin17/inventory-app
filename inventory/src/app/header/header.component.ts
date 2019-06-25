import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

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

  constructor(private authService: AuthService) {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  logOut() {
    this.authService.user = null;
    this.isAuthenticated = false;
    console.log('Logged Out');
  }
}
