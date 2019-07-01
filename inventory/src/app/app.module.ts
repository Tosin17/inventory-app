import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceItemComponent } from './devices/device-list/device-item/device-item.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppItemComponent } from './app-list/app-item/app-item.component';
import { EditAppItemComponent } from './app-list/edit-app-item/edit-app-item.component';
import { NewDeviceComponent } from './new-device/new-device.component';
import { HomeComponent } from './home/home.component';
import { ImageService } from './services/image.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthInterceptorService } from './services/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevicesComponent,
    DeviceDetailComponent,
    DeviceListComponent,
    DeviceItemComponent,
    AppListComponent,
    AppItemComponent,
    EditAppItemComponent,
    NewDeviceComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ChartModule
  ],
  providers: [
    ImageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
