import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../services/can-deactivate.service';
import { NewDeviceService } from '../services/new-device.service';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements CanComponentDeactivate {
  private formChangesSaved: boolean = false;

  constructor(private newDeviceService: NewDeviceService) {}

  saveDevice() {
    this.newDeviceService
    .addNewDevice({
      name: 'Test', 
      desc: 'Test desc', 
      image: 'Test image url'
    });
    this.formChangesSaved = true;
  }

  canDeactivate() {
    if (this.formChangesSaved) {
      return true;
    } else {
      confirm('Are you sure you want to re-route without saving?');
    }
  }
}
