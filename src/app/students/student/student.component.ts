import { Component, OnInit } from '@angular/core';
import { StudentDashboardComponent } from "../student-dashboard/student-dashboard.component";
import { UserService } from '../../users/user.service';
import { User } from '../../users/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [StudentDashboardComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  // user: any = {}; // Define an object to hold user data

    user: User = new User();

  constructor( private router: Router,
    private userService: UserService,
     private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Failed to fetch user details:', err);
      },
    });
  }


}
