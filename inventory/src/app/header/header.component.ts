import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  // @Output() showPage = new EventEmitter<string>();

  // selected(page: string) {
  //   this.showPage.emit(page);
  // }

  logOut() {
    console.log('logged out');
  }
}
