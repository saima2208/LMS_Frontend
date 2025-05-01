
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
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
   styleUrl: './login.component.css'
})
// export class LoginComponent {
//   credentials: LoginRequest = { email: '', password: '' };
//   errorMessage: string = '';

//   constructor(private AuthService: AuthServiceService, private router: Router) {}

//   login(): void {
//     this.AuthService.login(this.credentials).subscribe({
//       next: (response) => {
//         this.AuthService.setToken(response.token);
//         this.router.navigate(['/dashboard']); // Redirect after login
//       },
//       error: () => {
//         this.errorMessage = 'Invalid email or password';
//       },
//     });
//   }
// }

export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthServiceService, private router: Router) { }

  onLogin() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res) => {
          this.auth.setToken(res.access_token);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          alert('Invalid credentials')
          console.log(error)
        }
      });
  }
}
