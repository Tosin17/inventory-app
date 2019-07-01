import { Injectable } from "@angular/core";
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpParams } from '@angular/common/http';
import { signInUrl, signUpUrl } from '../../environments/environment';

import { User } from '../models/user.model';
import { Router } from '@angular/router';

export interface AuthUserData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registerd?: string
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

    public user = new BehaviorSubject<User>(null);

    constructor(
        private afAuth: AngularFireAuth,
        private http: HttpClient,
        private router: Router
    ) { }

    signIn(email: string, password: string): Observable<object> {
        return Observable.create(obs => {
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
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

    private handleError(errRes) {
        let msg = 'Sorry, we encountered a server error';
        if (!errRes.error.error) {
            return throwError(msg)
        }

        switch (errRes.error.error.message) {
            case 'EMAIL_EXISTS':
                return throwError('This email already exists');
            case 'EMAIL_NOT_FOUND':
                return throwError('This email does not exist');
        }
    }

    private handleAuth(res) {
        const _user = new User(
            res.localId,
            res.email,
            res.idToken,
            new Date().getTime() + parseInt(res.expiresIn) * 1000
        )
        this.user.next(_user);
        localStorage.setItem('user', JSON.stringify(_user))
    }

    autoLoginMaybe() {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData) {
            return;
        }

        const _user: User = new User(
            userData.id,
            userData.email,
            userData._token,
            new Date(userData._tokenExpDate)
        )

        if (_user.token) {
            this.user.next(_user);
        }
    }

    signInWithHttp(email, password): Observable<AuthUserData> {
        return this.http.post<AuthUserData>(signInUrl, {
            email,
            password,
            returnSecureToken: true
        }).pipe(
            tap(res => this.handleAuth(res)),
            catchError(this.handleError)
        )
    }

    signUpWithHttp(email, password): Observable<AuthUserData> {
        return this.http.post<AuthUserData>(signUpUrl, { email, password })
            .pipe(
                tap(res => this.handleAuth(res)),
                catchError(this.handleError)
            )
    }



    logOut() {
        this.user.next(null);
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
        }
        this.router.navigate(['/'])
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