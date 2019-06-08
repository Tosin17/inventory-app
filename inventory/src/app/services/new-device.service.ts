import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { DeviceModel } from '../models/device.model';

@Injectable({providedIn: 'root'})
export class NewDeviceService {
    private _newDevice = new Subject();

    public get newDevice() {
        return this._newDevice;
    }

    addNewDevice(device: DeviceModel) {
        this._newDevice.next(device)
    }
}