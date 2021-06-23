import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '@app/services/auth-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  async canActivate(): Promise<boolean> {
    const isValid = await this.authService.verify().toPromise()
    if (!isValid) {
      this.router.navigate(['/auth/signIn'])
    }
  
    return isValid
  }
}