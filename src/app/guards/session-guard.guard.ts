import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/base/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuardGuard implements CanActivate, CanLoad {
  /**
   *
   */
  constructor(
    private loginServie:LoginService,
    private router:Router
  ) {
  }
  canLoad():any {
    if (this.loginServie.isLogged()) {
      return true;
    }else{
      this.router.navigate(['/login']);
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
