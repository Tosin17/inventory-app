import { Injectable } from '@angular/core';
import { Observable, of, Subject, interval } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { imagesURL } from '../../environments/environment';
import { AuthService } from './auth.service';
import { map, tap, mergeMap, take, filter, multicast, refCount, publish, share, publishLast, publishBehavior, publishReplay } from 'rxjs/operators';
import * as moment from 'moment';

interface exceptionSummary {
    counts: Array<number>,
    dates: Array<string>
}

interface widgetResults {
    totalCount: number,
    data: {
        count: number,
        date: string
    }
}

@Injectable()
export class ImageService {
    private customObservable$ = Observable.create(obs => {
        let count = 1;
        setInterval(() => {
            obs.next(count);
            count++;
        }, 1000)
    });

    public rand = new Subject();

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

    getLineData() {
        // const obs1 = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
        // const obs2 = this.http.get('https://jsonplaceholder.typicode.com/todos/2')
        const res = {
            "widgetResults": {
                "totalCount": 68,
                "data": [
                    {
                        "count": 6,
                        "date": "2019-03-06T00:00:00"
                    },
                    {
                        "count": 10,
                        "date": "2019-04-06T00:00:00"
                    },
                    {
                        "count": 8,
                        "date": "2019-05-06T00:00:00"
                    },
                    {
                        "count": 15,
                        "date": "2019-06-06T00:00:00"
                    },
                    {
                        "count": 10,
                        "date": "2019-07-06T00:00:00"
                    },
                    {
                        "count": 17,
                        "date": "2019-08-06T00:00:00"
                    }
                ]
            }
        }

        const datasetsConfig = {
            backgroundColor: 'rgba(4,104,125, 0.4)',
            pointBackgroundColor: 'rgb(4,104,125)',
            pointBorderColor: 'rgba(4,104,125, 0)',
            borderColor: 'transparent'
        }

        const lineData$ = of(res);
        return lineData$.pipe(
            map(({ widgetResults: widgetResults }) => {
                // Compute dates and counts in a single iteration
                const summary: exceptionSummary = widgetResults.data.reduce((acc, val) => {
                    acc.counts.push(val.count);
                    acc.dates.push(moment(val.date).format('MMM YYYY'));
                    return acc;
                }, { counts: [], dates: [] })

                return {
                    labels: summary.dates,
                    datasets: [
                        {
                            label: ['Currently Open Exceptions'],
                            data: summary.counts,
                            ...datasetsConfig
                        }
                    ],
                    totalCount: widgetResults.totalCount
                }
            })
        )
    }

    logRandom() {
        setTimeout(() => {
            this.rand.next(Math.random() * 6 + 1);
        }, 500);
    }


    startPoller() {
        const getDataFromServer$ = interval(1000).pipe(
            take(5),
            publishReplay(),
            refCount()
        );
        return getDataFromServer$;
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