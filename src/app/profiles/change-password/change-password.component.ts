// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
// // import { PasswordChangeRequest } from '../services/profile.service';
// import { catchError, Observable, throwError } from 'rxjs';
// import { User } from '../../users/user.model';
// import { HttpClient } from '@angular/common/http';
// import { ProfileService } from '../services/profile.service';

// @Component({
//   selector: 'app-change-password',
//   imports: [FormsModule,CommonModule],
//   templateUrl: './change-password.component.html',
//   styleUrl: './change-password.component.css'
// })
// export class ChangePasswordComponent {

//  private readonly apiUrl = 'http://localhost:8080/api/users';

//   constructor(private http: HttpClient,profileService : ProfileService) {}

//   // Centralized error handling
//   private handleError(error: any): Observable<never> {
//     console.error('An error occurred:', error);
//     return throwError(error.error || 'Something went wrong. Please try again.');
//   }

//   // Fetch user info
//   getUserInfo(): Observable<User> {
//     return this.http.get<User>(`${this.apiUrl}/me`).pipe(catchError(this.handleError));
//   }

//   // Change user password
//   changePassword(data: PasswordChangeRequest): Observable<any> {
//     return this.http
//       .put(`${this.apiUrl}/change-password`, data)
//       .pipe(catchError(this.handleError));
//   }

//   // Edit user information
//   editUserInfo(data: EditUserInfoRequest): Observable<any> {
//     return this.http
//       .put(`${this.apiUrl}/edit`, data)
//       .pipe(catchError(this.handleError));
//   }
// }

// export interface PasswordChangeRequest {
//   currentPassword: string;
//   newPassword: string;
// }

// export interface EditUserInfoRequest {
//   name: string;
//   phone: string;
// }

 import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  imports: [FormsModule,CommonModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  private readonly apiUrl = 'http://localhost:8080/api/users';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.changePasswordForm.invalid) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const { currentPassword, newPassword, confirmPassword } = this.changePasswordForm.value;

    if (newPassword !== confirmPassword) {
      alert('New Password and Confirm Password do not match.');
      return;
    }

    this.changePassword({ currentPassword, newPassword }).subscribe(
      () => alert('Password changed successfully!'),
      (error) => alert('Failed to change password: ' + error.message)
    );
  }

  private changePassword(data: { currentPassword: string; newPassword: string }) {
    return this.http.put(`${this.apiUrl}/change-password`, data);
  }
}

