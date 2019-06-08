import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { AppListComponent } from './app-list/app-list.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { NewDeviceComponent } from './new-device/new-device.component';
import { HomeComponent } from './home/home.component';
import { Permissions } from './services/permisions.service';
import { CanDeactivateService } from './services/can-deactivate.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'devices',
    component: DevicesComponent,
    canActivateChild: [Permissions],
    children: [
      {
        path: 'device', 
        component: DeviceDetailComponent
      },
      {
        path: 'new-device', 
        component: NewDeviceComponent, 
        canActivate: [Permissions],
        canDeactivate: [CanDeactivateService]
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
