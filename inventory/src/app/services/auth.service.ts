import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { signInUrl, signUpUrl } from '../../environments/environment';

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

    constructor(private afAuth: AngularFireAuth, private http: HttpClient) { }

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

    signInWithHttp(email, password): Observable<AuthUserData> {
        return this.http.post<AuthUserData>(signInUrl, { email, password })
            .pipe(catchError(this.handleError));
    }

    signUpWithHttp(email, password): Observable<AuthUserData> {
        return this.http.post<AuthUserData>(signUpUrl, { email, password })
            .pipe(catchError(this.handleError))
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