
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/login.model';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
   styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: LoginRequest = { email: '', password: '' };
  errorMessage: string = '';

  // constructor(private AuthService: AuthServiceService, private router: Router) {}

  // login(): void {
  //   this.AuthService.login(this.credentials).subscribe({
  //     next: (response) => {
  //       this.AuthService.saveToken(response.token);
  //       this.router.navigate(['/dashboard']); // Redirect after login
  //     },
  //     error: () => {
  //       this.errorMessage = 'Invalid email or password';
  //     },
  //   });
  // }
}
