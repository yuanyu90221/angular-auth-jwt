import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{

  canActivate() {
    if( this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login']);
    return false;
  }

  constructor(
    private router: Router,
    private authService: AuthService) { }

}
