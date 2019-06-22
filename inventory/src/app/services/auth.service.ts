import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../environments/environment';

export interface AuthUserData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _canDo: boolean = true;
    private _auth$ = Observable.create(obs => {
        setTimeout(() => {
            obs.next(this._canDo);
            obs.complete();
        }, 500);
    });

    constructor(private afAuth: AngularFireAuth, private http: HttpClient) { }

    signUp(email: string, password: string): Observable<object> {
        return Observable.create(obs => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(newUser => {
                    obs.next(newUser);
                })
                .catch(err => {
                    obs.error(err);
                })
                .finally(() => {
                    obs.complete();
                })
        })
    }

    signUpWithHttp(email, password): Observable<AuthUserData> {
        return this.http.post<AuthUserData>(URL, { email, password })
    }

    public get auth$() {
        return this._auth$;
    }
    public get canDo() {
        return this._canDo;
    }
    public set canDo(val: boolean) {
        this._canDo = val;
    }
}