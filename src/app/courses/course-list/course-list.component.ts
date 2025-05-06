import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Course } from '../../model/course.model';

import { CourseService } from '../../services/course.service';
import { NgIf } from '@angular/common';

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

  Edit(a: Course) {
    this.router.navigate(['/add-course'], { state: { a } });
  }

  Delete(a: Course): void {
    if (a.course_id != null) {
      if (confirm('are you want to delete?')) {
        this.courseService.getCourses().subscribe(() => {
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
