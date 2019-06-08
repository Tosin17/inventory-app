import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { DeviceModel } from 'src/app/models/device.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NewDeviceService } from 'src/app/services/new-device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})

export class DeviceListComponent implements OnInit {
  private devices: DeviceModel[];

  constructor(private devicesService: DevicesService, 
    private router: Router,
    private route: ActivatedRoute,
    private newDeviceService: NewDeviceService) { 

      this.newDeviceService.newDevice.subscribe((device: DeviceModel) => {
        this.devices.push(device);
      })

    }

  ngOnInit() {
    this.devices = this.devicesService.getDevices();
  }

  onNewDevice() {
    this.router.navigate(['new-device'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }
}
