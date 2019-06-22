import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ImageService {
    private customObservable$ = Observable.create(obs => {
        let count = 1;
        setInterval(() => {
            obs.next(count);
            count++;
        }, 1000)
    });

    getIntervals() {
        return this.customObservable$;
    }
}