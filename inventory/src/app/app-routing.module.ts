import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { AppListComponent } from './app-list/app-list.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesComponent
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
