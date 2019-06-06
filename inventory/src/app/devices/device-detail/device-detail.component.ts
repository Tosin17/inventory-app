import { Component, OnInit, Input } from '@angular/core';
import { DeviceModel } from 'src/app/models/device.model';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  @Input() deviceSelected: DeviceModel;
  private showDropdown = false;

  constructor() { }

  ngOnInit() {
  }

}
