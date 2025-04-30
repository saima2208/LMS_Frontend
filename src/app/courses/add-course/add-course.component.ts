import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import {  CourseService } from '../../services/course.service';
import { Course } from '../../model/course.model';
// import { Course, CourseService } from '../../services/course.service';


@Component({
  selector: 'app-add-course',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
})
export class AddCourseComponent {

//   courses: Course = new Course(0,0,0,'','','','',0,'');
//   isEditMode: boolean = false;

//   constructor(private router: Router) {
//     const nav = this.router.getCurrentNavigation();
//     if (nav?.extras.state && nav.extras.state['course']) {
//       this.courses = nav.extras.state['course'];
//       debugger;
//       this.isEditMode = true;
//     }if(this.courses.course_id == 0){
//       this.isEditMode = false;
//   }
//   }
//   ngOnInit(): void {
//     // Check if editing an existing course
//     const state = history.state;
//    if (state && state.course) {
//       this.courses = state.course;
//      //  this.isEditMode = true;
//     }
//   }

//  saveCourse(): void {
//    const courses = JSON.parse(localStorage.getItem('courses') || '[]');

//    if (this.isEditMode) {
//      // Update existing course
//      const index = courses.findIndex((p: Course) => p.course_id === this.courses.course_id);
//      if (index !== -1) {
//        courses[index] = this.courses;
//      }
//    } else {
//      // Add new course
//      this.courses.course_id = courses.length > 0 ? Math.max(...courses.map((p: Course) => p.course_id)) + 1 : 1;
//      courses.push(this.courses);
//    }

//    // Save back to localStorage
//    localStorage.setItem('courses', JSON.stringify(courses));
//    this.router.navigate(['/course-list']); // Navigate back to course list
//  }


  
  // this is object initialized  for the class
  course: Course = new Course(0, 0, 0, '', '', '', '', 0, '');
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
          this.course = new Course(0, 0, 0, '', '', '', '', 0, '');
          this.router.navigate(['/course-list']);
        },
        error: err => console.error('Create error:', err)
      });
    }
  }
}

