import { Component, OnInit } from '@angular/core';
import { GetUserInfo, User } from '../../users/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  currentUser: User = new User();

  currentUserId?: number;

  userInfo: GetUserInfo | undefined;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.updateUserInfo();

    this.currentUserId = Number(localStorage.getItem('id'));
    this.getUserInfo();

  }


  getUserInfo() {
    if (!this.currentUserId) return;

    this.userService.fetchUserById(this.currentUserId).subscribe({
      next: (res: User) => {
        this.currentUser = res; // Populate currentUser with fetched data
      },
      error: (err) => {
        console.error('Failed to fetch user info:', err);
      },
    });
  }

  

    updateUserInfo() {
    if (!this.currentUserId) return;

    this.userService.updateProfile(this.currentUserId, this.currentUser).subscribe({
      next: () => {
        alert('Profile updated successfully!');
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        console.error('Failed to update user info:', err);
      },
    });
  }

}
