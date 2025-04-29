// import { AuthServiceService } from './../services/auth-service.service';
// // import { CanActivateFn } from '@angular/router';

// // export const authsGuard: CanActivateFn = (route, state) => {
// //   return true;
// // };




// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';


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
