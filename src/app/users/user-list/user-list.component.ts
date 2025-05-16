import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule,NgIf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
 users: User[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }


  saveUser() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  updateUser(a: User) {
    this.router.navigate(['/add-user'], { state: { a } });
  }

  deleteUser(a: User): void {
    if (a.id != null) {
      if (confirm('are you want to delete?')) {
        this.userService.deleteUser(a.id).subscribe(() => {
          this.saveUser();
        });
      }
    } else {
      alert('Id is Invalid?');
    }
  }



  addNewUser(): void {
    this.router.navigate(['/add-user'], { state: { users: new User() } });
  }
}
