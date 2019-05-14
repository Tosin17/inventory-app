import { Component, ViewEncapsulation, Input } from '@angular/core';
import { DeviceModel } from 'src/app/models/device.model';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class DeviceItemComponent {
  @Input() device: DeviceModel;
}
