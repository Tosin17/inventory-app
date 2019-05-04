import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Authors';
  authors: string[];

  constructor({ getAuthors }: AuthorsService) {
    this.authors = getAuthors();
  }

  onChangeInput(fName) {
    console.log(fName);
  }

}
