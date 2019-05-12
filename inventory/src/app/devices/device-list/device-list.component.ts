import { Component, OnInit } from '@angular/core';
import { DeviceModel } from '../../models/device.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})

export class DeviceListComponent implements OnInit {
  public devices: DeviceModel[];
  constructor() { }

  ngOnInit() {
    this.devices = [
      new DeviceModel(
        'Camera',
        'A digital camera',
        'https://pixabay.com/get/eb34b8062dfc1c22d2524518b74d479feb75e2d31aac104490f7c77ba6e8b3b8_1280.jpg'),
      new DeviceModel(
        'Shredder',
        'A paper shredder',
        'https://pixabay.com/get/e836b80d2ff0083ed1584d05fb1d4797ea7fe0d51fb20c4090f5c67fa5ecb2b8da_1280.jpg')
    ];
  }
}
