import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { Enrollment } from '../../enrollments/enrollment.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-mycourses',
  imports: [FormsModule,NgFor,CommonModule],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent implements OnInit {

  courses: Course[] = [];
  userId: number | undefined;


  constructor(private router: Router, private userService: UserService) { }

    // ngOnInit(): void {

    //   this.getCourses();

    //    this.currentUserId = Number(localStorage.getItem('id'));

    // }

      ngOnInit(): void {
    this.loadUserId(); // Ensure userId is set
    if (this.userId !== null) {
      this.getCourses();
    }

     this.userId = Number(localStorage.getItem('id'));
  }

loadUserId(): void {
    // Fetch the userId from storage or API
    const user = JSON.parse(localStorage.getItem('userId') || '{}');
    // this.userId = user?.id || null;
  }





   getCourses(): void {
    if (this.userId) {
      this.userService.getCoursesByUserId(this.userId).subscribe({
        next: (courses) => {
          this.courses = courses;
        },
        error: (err) => {
          console.error('Error fetching courses:', err);
        },
      });
    }
  }



}


