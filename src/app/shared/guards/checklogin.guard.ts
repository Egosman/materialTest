import { AuthService } from './../../pages/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {
  constructor(private authSvc: AuthService) {}
  canActivate(): 
  Observable<boolean>{
    return this.authSvc.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => !isLogged)
    )

  }
  
}
