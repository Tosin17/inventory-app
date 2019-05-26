import { Component, OnInit } from '@angular/core';
import { DevicesService } from './devices.service';
import { DeviceModel } from '../models/device.model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  private selectedDevice: DeviceModel;
  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.devicesService.selectedDevice
    .subscribe((device: DeviceModel) => {
      this.selectedDevice = device;
    })
  }

}
