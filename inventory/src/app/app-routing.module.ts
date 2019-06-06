import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { AppListComponent } from './app-list/app-list.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';

const routes: Routes = [
  {
    path: 'devices',
    component: DevicesComponent,
    children: [
      {
        path: '', component: DeviceListComponent
      },
      {
        path: 'device', component: DeviceDetailComponent
      },
      // {
      //   path: 'new-device', component: NewDeviceComponent
      // }
    ]
  },
  {
    path: 'apps-list',
    component: AppListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
