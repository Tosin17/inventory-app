import { Component, Input } from '@angular/core';
import { AppModel } from '../../models/apps.model';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.css']
})

export class AppItemComponent {
  @Input() app: AppModel;
}
