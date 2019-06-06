import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { AppListComponent } from './app-list/app-list.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { NewDeviceComponent } from './new-device/new-device.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'devices',
    component: DevicesComponent,
    children: [
      {
        path: 'device', component: DeviceDetailComponent
      },
      {
        path: 'new-device', component: NewDeviceComponent
      }
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
