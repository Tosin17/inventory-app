import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { DeviceModel } from 'src/app/models/device.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})

export class DeviceListComponent implements OnInit {
  private devices: DeviceModel[];

  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.devices = this.devicesService.getDevices();
  }
}
