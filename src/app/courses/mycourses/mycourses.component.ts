import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-mycourses',
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent implements OnInit {

  courses: Course[] = [];
  userId?: number;


  constructor(private router: Router, private userService: UserService) { }

  // ngOnInit(): void {
  //   this.fetchMyCourses(19);
  //   this.userId = Number(localStorage.getItem('id'));

  // }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('id'));
    if (this.userId) {
      this.fetchMyCourses(this.userId);
    } else {
      console.error('User ID is missing in localStorage');
    }
  }

  // fetchMyCourses(userId:number) {
  //   // const userId = localStorage.getItem('id');
  //   // if (!userId) return;
  //   this.userService.getCoursesByUserId(userId).subscribe({
  //     next: (data) => {
  //       this.courses = data;

  //     },
  //     error: (err) => {
  //       console.error('Failed to load courses :', err);
  //     }

  //   })

  // }

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
  }
}


