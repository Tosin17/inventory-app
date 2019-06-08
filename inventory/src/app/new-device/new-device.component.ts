import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../services/can-deactivate.service';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements CanComponentDeactivate {
  private formChangesSaved: boolean = false;

  saveDevice() {
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
