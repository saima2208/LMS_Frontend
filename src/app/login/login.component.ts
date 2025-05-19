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
        localStorage.setItem('id', res.id);

        const role = this.auth.getUserRole();

        // Role-based navigation
        switch (role) {
          case 'admin':
            // this.router.navigate(['/adminProfile']);
            window.location.href="/admin";
            break;
          case 'teacher':
            // this.router.navigate(['/teacherProfile']);
            window.location.href="/teacher";
            break;
          case 'student':
            // this.router.navigate(['/studentProfile']);
            window.location.href="/student";
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
