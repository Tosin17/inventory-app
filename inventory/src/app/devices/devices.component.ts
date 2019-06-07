import { Component, OnInit } from '@angular/core';
import { DevicesService } from './devices.service';
import { DeviceModel } from '../models/device.model';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  private selectedDevice: DeviceModel;
  constructor(private devicesService: DevicesService, private imageService: ImageService) { }

  ngOnInit() {
    this.devicesService.selectedDevice
    .subscribe((device: DeviceModel) => {
      this.selectedDevice = device;
    })

    const obs$ = this.imageService.getIntervals()
    .subscribe(data => {
      console.log(data);

      if (data === 10) {
        obs$.unsubscribe();
      }
    })
  }

}
