import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../../users/user.service';
import { Router } from '@angular/router';

import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-change-password',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  currentUserId?: number;
  successMessage = '';
  errorMessage = '';
  passwordForm!: FormGroup; // Ensures type safety and initialization

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.currentUserId = Number(localStorage.getItem('id'));
    this.initForms(); // Ensure the form is initialized on component load
  }

  initForms(): void {
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  submitPasswordChange(): void {
    if (this.passwordForm?.valid) {
      const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;

      if (newPassword !== confirmPassword) {
        alert('New Password and Confirm Password do not match!');
        return;
      }

      const passwordData = {
        userId: this.currentUserId,
        currentPassword,
        newPassword
      };

      this.profileService.changePassword(passwordData).subscribe({
        next: () => {
          alert('Password changed successfully!');
           this.router.navigate(['/profile']);
          this.passwordForm.reset();
        },
        error: (err) => {
          alert(err.error?.message || 'Failed to change password!');
        }
      });
    } else {
      alert('Please fill out the form correctly!');
    }
  }
}


