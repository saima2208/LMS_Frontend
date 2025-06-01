import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-mycourses',
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent implements OnInit {

  courses: Course[] = [];
  userId?: number;
  //  teacherId?: number;


  constructor(
    private router: Router,
    private userService: UserService,
    private courseService: CourseService
  ) {

  }


  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('id'));
    if (this.userId) {
      this.fetchMyCourses(this.userId);
    } else {
      console.error('User ID is missing in localStorage');
    }
  }


  fetchMyCourses(userId: number): void {
    this.userService.getCoursesByUserId(userId).subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Failed to load courses:', err);
        // Display an error message in the UI
      }
    });



    const teacherId = this.userId; // Assume teacher ID is the same as user ID for simplicity
    if (teacherId) {
      this.courseService.getCoursesByTeacher(teacherId).subscribe({
        next: (data) => {
          this.courses = [...this.courses, ...data]; // Merge results if necessary
        },
        error: (err) => {
          console.error('Failed to load courses by teacher:', err);
        }
      });
    }
  }
}





