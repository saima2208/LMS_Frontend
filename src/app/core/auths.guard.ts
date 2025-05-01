// import { AuthServiceService } from './../services/auth-service.service';
// import { CanActivateFn } from '@angular/router';

// export const authsGuard: CanActivateFn = (route, state) => {
//   return true;
// };


//  import { Injectable } from '@angular/core';
//  import { CanActivate, Router } from '@angular/router';


// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthServiceService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.getToken()) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }


import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  const isLoggedIn = authService.isAuthenticated();
  const expectedRoles = route.data['roles'] as Array<string>;
  const userRole = authService.getUserRole().toLowerCase();

  if (isLoggedIn && expectedRoles == undefined) {
    return true;
  } else if (isLoggedIn && expectedRoles.includes(userRole)) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
