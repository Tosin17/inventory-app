import { Component, OnInit, Input } from '@angular/core';
import { DeviceModel } from 'src/app/models/device.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  private deviceSelected; 
  private showDropdown = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.deviceSelected = param;
    });
  }

}
