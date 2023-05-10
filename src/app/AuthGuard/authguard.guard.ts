import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../Services/AuthGuardService/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(
    private authguardService: AuthguardServiceService,
    private route: Router
  ) {}

  canActivate(): boolean {
    if (!this.authguardService.gettoken()) {
      this.route.navigateByUrl('/login');
    }
    return this.authguardService.gettoken();
  }
  
}
