import { Component } from '@angular/core';
import { Course } from '../course.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-course',
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  course: Course[] = [];

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.course = data;
    });
  }




}
