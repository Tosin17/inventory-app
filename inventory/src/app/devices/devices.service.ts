import { Injectable, EventEmitter } from '@angular/core';
import { DeviceModel } from '../models/device.model';

@Injectable({ providedIn: 'root' })
export class DevicesService {
  private devices: DeviceModel[];
  selectedDevice = new EventEmitter<DeviceModel>();

  constructor() {
    this.devices = [
      new DeviceModel(
        'Camera',
        'A digital camera',
        'https://cdn2.bigcommerce.com/server3300/f9fok/products/13867/images/23693/1517374264000_1387598__42567.1518541921.600.600.jpg?c=2'),
      new DeviceModel(
        'Shredder',
        'A paper shredder',
        'https://www.oreweb.ca/contents/media/l_destroyit-ideal-mbm-4002-cross-cut-paper-shredder.jpg'),
      new DeviceModel(
        'Canon',
        'A digital camera with a difference',
        'https://cdn2.bigcommerce.com/server3300/f9fok/products/13867/images/23693/1517374264000_1387598__42567.1518541921.600.600.jpg?c=2'),
      new DeviceModel(
        'HP Cam',
        'A cam recorder for offical use',
        'https://cdn2.bigcommerce.com/server3300/f9fok/products/13867/images/23693/1517374264000_1387598__42567.1518541921.600.600.jpg?c=2'),

    ];
  }

  getDevices() {
    return this.devices.slice();
  }
}