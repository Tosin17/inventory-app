import { Component, Input } from '@angular/core';
import { DeviceModel } from 'src/app/models/device.model';
import { DevicesService } from '../../devices.service';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css']
})

export class DeviceItemComponent {
  @Input() device: DeviceModel;
  deviceRoute = ['device']

  constructor(private deviceService: DevicesService) {}

  // onSelected() {
  //   this.deviceService.selectedDevice.emit(this.device);
  // }
}
