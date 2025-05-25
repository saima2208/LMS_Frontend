import { Component, OnInit } from '@angular/core';
import { Role, User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from "../../admins/admin-dashboard/admin-dashboard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule, AdminDashboardComponent, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  users: User = new User();

  roles = Object.values(Role);

  isUpdate = false;


  constructor(
    private router: Router,
    private userService: UserService
  ) {
    const nav = this.router.getCurrentNavigation();

    if (nav?.extras.state && nav.extras.state['a']) {
      this.users = nav.extras.state['a'];

      this.isUpdate = true;
    }
  }

  onSubmit(): void {
    if (this.isUpdate) {
      if (!this.users.email) {
        alert('Email is required to update the user.');
        return;
      }

      this.userService.updateUser(this.users.id, this.users).subscribe({
        next: () => {
          this.router.navigate(['/user-list']);
        },
        error: (err) => {
          alert('Failed to update user: ' + err.message);
          console.error(err);
        },
      });
    } else {
      console.log("add user clicked")
      this.userService.createUser(this.users).subscribe({
        next: () => {
          this.router.navigate(['/user-list']);
        },
        error: (err) => {
          alert('Failed to add user: ' + err.message);
          console.error(err);
        },
      });
    }
  }
}
