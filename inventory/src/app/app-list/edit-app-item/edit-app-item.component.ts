import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-app-item',
  templateUrl: './edit-app-item.component.html',
  styleUrls: ['./edit-app-item.component.css']
})

export class EditAppItemComponent {
  @Input() selectedApp;
}
