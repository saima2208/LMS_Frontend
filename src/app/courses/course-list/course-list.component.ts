import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Course } from '../../model/course.model';

import { CourseService } from '../../services/course.service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-course-list',
  imports: [NgIf],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent  {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  // // ngOnInit(): void {
  // //   this.loadCourses();
  // // }

  // // loadCourses(): void {
  // //   this.courseService.getCourses().subscribe((data) => (this.courses = data));
  // // }

  // deleteCourse(id: number): void {
  //   this.courseService.deleteCourse(id).subscribe(() => this.loadCourses());
  }

