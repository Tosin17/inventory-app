import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class Permissions implements CanActivate, CanActivateChild {
    
    constructor(private authService: AuthService, private router: Router) {
        this.authService.canDo = true;
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return Observable.create(obs => {
            this.authService.auth$.subscribe(isAuth => {
                if (isAuth) {
                    obs.next(true);
                    obs.complete();
                } else {
                    this.router.navigate(['/']);                   
                }
            })
        });
    }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return Observable.create(obs => {
            this.authService.auth$.subscribe((isAuth: boolean) => {
               if (isAuth) {
                   obs.next(isAuth);
                   obs.complete();
               } else {
                   this.router.navigate(['/']);
               }
            });
        })
    }
}

