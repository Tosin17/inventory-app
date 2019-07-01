import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { imagesURL } from '../../environments/environment';
import { AuthService } from './auth.service';


@Injectable()
export class ImageService {
    private customObservable$ = Observable.create(obs => {
        let count = 1;
        setInterval(() => {
            obs.next(count);
            count++;
        }, 1000)
    });

    constructor(
        private http: HttpClient,
        private auth: AuthService
    ) { }

    getIntervals() {
        return this.customObservable$;
    }

    getImages() {
        return this.http.get(imagesURL);
    }

    // getImages() {
    //     return this.auth.user
    //         .pipe(
    //             take(1),
    //             exhaustMap(user => {
    //                 return this.http.get(imagesURL, {
    //                     params: new HttpParams().set('auth', user.token)
    //                 })
    //             })
    //         )
    // }
}