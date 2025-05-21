import { Component, OnInit } from '@angular/core';
import { Role, User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from "../../admins/admin-dashboard/admin-dashboard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule, AdminDashboardComponent,CommonModule],
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

  // onSubmit() {
    // if (this.isUpdate) {
    //   // Update course logic
    //    this.userService.updateUser(this.users.id, this.users).subscribe({
    //     next: () => {
    //       this.router.navigate(['/user-list']);
    //     },
    //     error: (err) => {
    //       alert('Failed to update user: ' + err.message);
    //       console.error(err);
    //     },
    //   });
  //   } else {
  //     // Create course logic
  //     this.userService.createUser(this.users).subscribe({
  //       next: () => {
  //         this.router.navigate(['/user-list']);
  //         this.users = new User(); // Reset the form model
  //       },
  //       error: (err) => {
  //         alert('Failed add user: ' + err.message);
  //         console.error(err);
  //       },
  //     });
  //   }
  // }


  onSubmit(): void {
  if (this.isUpdate) {
    // Ensure email is present
    if (!this.users.email) {
      alert('Email is required to update the user.');
      return;
    }

     if (this.isUpdate) {
      // Update course logic
       this.userService.updateUser(this.users.id, this.users).subscribe({
        next: () => {
          this.router.navigate(['/user-list']);
        },
        error: (err) => {
          alert('Failed to update user: ' + err.message);
          console.error(err);
        },
      });

    // Update user by email
    // this.userService.updateUserByEmail(this.users.email, this.users).subscribe({
    //   next: () => {
    //     this.router.navigate(['/user-list']);
    //   },
    //   error: (err) => {
    //     alert('Failed to update user: ' + err.message);
    //     console.error(err);
    //   },
    // });
  } else {
    // Logic for adding a new user
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
}
