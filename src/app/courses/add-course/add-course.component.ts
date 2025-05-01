import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import {  CourseService } from '../../services/course.service';
import { Course } from '../../model/course.model';



@Component({
  selector: 'app-add-course',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
})
export class AddCourseComponent {



  // this is object initialized  for the class
  course: Course = new Course();
  isUpdate: boolean = false;

  constructor(
    private router: Router,
    private courseService: CourseService
  ) {}

  // ngOnInit(): void {
  //   const nav = this.router.getCurrentNavigation();
  //   if (nav?.extras.state && nav.extras.state['course']) {
  //     this.course = nav.extras.state['course'];
  //     this.isUpdate = true;
  //   }
  // }

  onSubmit() {
    if (this.isUpdate) {
      this.courseService.updateCourse(this.course.course_id, this.course).subscribe({
        next: () => this.router.navigate(['/course-list']),
        error: err => console.error('Update error:', err)
      });
    } else {
      this.courseService.createCourse(this.course).subscribe({
        next: () => {
          this.course = new Course();
          this.router.navigate(['/course-list']);
        },


        error: err => console.error('Create error:', err)
      });
    }
  }
}

