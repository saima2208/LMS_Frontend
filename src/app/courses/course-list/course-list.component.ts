import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Course } from '../course.model';


import { NgIf } from '@angular/common';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  imports: [NgIf],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  courses: Course[] = [];

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }


  saveCourse() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  updateCourse(a: Course) {
    this.router.navigate(['/add-course'], { state: { a } });
  }

  deleteCourse(a: Course): void {
    if (a.id != null) {
      if (confirm('are you want to delete?')) {
        this.courseService.deleteCourse(a.id).subscribe(() => {
          this.saveCourse();
        });
      }
    } else {
      alert('Id is Invalid?');
    }
  }



  addNewCourse(): void {
    this.router.navigate(['/add-course'], { state: { course: new Course() } });
  }
}
