import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    private _canDo: boolean = true;
    private _auth$ = Observable.create(obs => {
        setTimeout(() => {
            obs.next(this._canDo);
            obs.complete();
        }, 500);
    });
    public get auth$() {
        return this._auth$;
    }
    public get canDo() {
       return this._canDo;
    }
    public set canDo(val: boolean) {
        this._canDo = val;
    }

    // isAuth() {
    //     return this.auth$;
    // }
}