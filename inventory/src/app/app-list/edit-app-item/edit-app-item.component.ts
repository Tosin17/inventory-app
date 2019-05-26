import { 
  Component, 
  Input, 
  OnInit, 
  OnChanges, 
  ViewChild, 
  ElementRef, 
  SimpleChanges 
} from '@angular/core';

@Component({
  selector: 'app-edit-app-item',
  templateUrl: './edit-app-item.component.html',
  styleUrls: ['./edit-app-item.component.css']
})

export class EditAppItemComponent implements OnInit, OnChanges {
  @Input() selectedApp;
  @ViewChild('appName') appName: ElementRef;
  @ViewChild('noOfUsers') noOfUsers: ElementRef;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedApp && !changes.firstChange) {
      this.appName.nativeElement.value = this.selectedApp.name;
      this.noOfUsers.nativeElement.value = this.selectedApp.noOfUsers;
    }
  }
}
