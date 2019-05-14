import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppModel } from '../models/apps.model';
@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppListComponent implements OnInit {
  apps: AppModel[];
  constructor() { }

  ngOnInit() {
    this.apps = [
      new AppModel('Outlook', 45),
      new AppModel('Hangouts', 23),
      new AppModel('Skype', 50),
      new AppModel('Webex', 203)
    ]
  }
}
