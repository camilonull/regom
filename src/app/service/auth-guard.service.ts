import { Injectable } from '@angular/core';
import { AuthGoogleService } from './auth-google.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authGoogleService: AuthGoogleService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authGoogleService.getAuthConfirm()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
