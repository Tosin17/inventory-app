import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService {
  private authors: string[] = [
    'Jermain',
    'Boliva',
    'Renouver'
  ];

  getAuthors = () => {
    return this.authors;
  }
}
