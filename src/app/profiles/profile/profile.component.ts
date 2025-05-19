import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { Role, User } from '../../users/user.model';
import { CommonModule } from '@angular/common';
import { Password } from '../password.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

 user: User = {
   id: 0,
   name: '',
   email: '',
   phone: '',
   fatherName: '',
   motherName: '',
   address: '',
   avatarUrl: '',
   gender: '',
   nationality: '',
   password: '',
   role: Role.Admin
 };
  currentUserId?: number;

  constructor(private profileService: ProfileService,private router: Router) {}

  ngOnInit(): void {
    this.fetchUserInfo();
    this.currentUserId = Number(localStorage.getItem('id'));
  }

  fetchUserInfo(): void {
    this.profileService.getUserInfo().subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.error('Error fetching user info:', error);
      }
    );
  }


onEditUserInfo(): void {
  // Navigate to the edit user info route
  this.router.navigate(['/edit']);
}

onChangePassword(): void {
  // Navigate to the change password route
  this.router.navigate(['/changePassword']);
}


}


