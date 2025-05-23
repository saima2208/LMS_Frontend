import { User } from '../../users/user.model';
import { Component, OnInit } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';


@Component({
  selector: 'app-admin',
  imports: [AdminDashboardComponent, FormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {

  currentUser: User = new User();

  constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
    this.getCurrentUser();
  }



    getCurrentUser(): void {
    this.userService.getCurrentUser().subscribe({
      next: (data) => {
        this.currentUser = data; // Assign fetched courses to the list
        console.log('Fetched courses:', this.currentUser);
      },
      error: (err) => console.error('Failed to load courses:', err),
    });
  }

  // ngOnInit(): void {
  //   this.userService.getCurrentUser().subscribe({
  //     next: (data: User) => (this.currentUser = data),
  //     error: (err) => console.error('Error fetching user data:', err),
  //   });
  // }

  editUser(user: User): void {
    this.router.navigate(['/edit-user', user.id]);
  }

}
