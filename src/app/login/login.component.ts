import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  // onLogin() {
  //   this.auth.login({ email: this.email, password: this.password })
  //     .subscribe({
  //       next: (res) => {
  //         this.auth.setToken(res.access_token);
  //         this.router.navigate(['/adminProfile']);
  //       },
  //       error: (error) => {
  //         alert('Invalid credentials')
  //         console.log(error)
  //       }
  //     });
  // }

  onLogin() {
    const loginData = { email: this.email, password: this.password };

    this.auth.login(loginData).subscribe({
      next: (res) => {
        // Set token
        this.auth.setToken(res.access_token);

        // Role-based navigation
        switch (res.role) {
          case 'ADMIN':
            this.router.navigate(['/adminProfile']);
            break;
          case 'TEACHER':
            this.router.navigate(['/teacherProfile']);
            break;
          case 'STUDENT':
            this.router.navigate(['/studentProfile']);
            break;
          default:
            alert('Unknown role. Please contact support.');
        }
      },
      error: (error) => {
        // Handle errors
        alert('Invalid credentials');
        console.error(error);
      }
    });
  }


}
