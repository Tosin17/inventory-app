import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevicesService } from './devices.service';
import { DeviceModel } from '../models/device.model';
import { ImageService } from '../services/image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit, OnDestroy {
  private selectedDevice: DeviceModel;
  private subs: Subscription;
  constructor(private devicesService: DevicesService, private imageService: ImageService) { }

  ngOnInit() {
    this.devicesService.selectedDevice
      .subscribe((device: DeviceModel) => {
        this.selectedDevice = device;
      })

    this.subs = this.imageService.getIntervals()
      .subscribe(data => {
        console.log(data);

        if (data === 1) {
          this.subs.unsubscribe();
        }
      })

    this.imageService.getImages().subscribe(data => {
      console.log(data);
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
