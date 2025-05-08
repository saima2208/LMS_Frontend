import { Component } from '@angular/core';
import { Course } from '../../model/course.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  course: Course[] = [];



  // ngOnInit(): void {

  //   let allCourse = JSON.parse(localStorage.getItem('courses') || '[]');
  //   this.course = allCourse;


  // }

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.course = data;
    });
  }




}
