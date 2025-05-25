import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { GetUserInfo, Role, User } from '../../users/user.model';
import { CommonModule } from '@angular/common';
import { Password } from '../password.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../users/user.service';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  currentUser: User = new User();
  currentUserId?: number;

  userInfo: GetUserInfo | undefined;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.fetchUserInfo();

    this.currentUserId = Number(localStorage.getItem('id'));

  }
  fetchUserInfo() {

    const userId = localStorage.getItem('id');
    if (!userId) return;

    this.userService.getCurrentUser().subscribe({
      next: (res: GetUserInfo) => {
        // alert('successfully retraive!');
        this.userInfo = res;
      },
      error: (err) => {
        console.error('Failed to load user info:', err);
      }
    });

  }


  onEditUserInfo(a: User) {
    this.router.navigate(['/edit'], { state: { a } });
  }

  onChangePassword(): void {
    // Navigate to the change password route
    this.router.navigate(['/changePassword']);
  }

}


