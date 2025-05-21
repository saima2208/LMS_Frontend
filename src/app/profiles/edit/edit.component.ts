import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [CommonModule,FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  currentUser: User = new User();

  constructor(private router: Router,private userService: UserService){

  }

 onSubmit(): void {

      // Update profile logic
       this.userService.getCurrentUser().subscribe({
        next: () => {
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          alert('Failed to update profile info: ' + err.message);
          console.error(err);
        },
      });
    }

}
