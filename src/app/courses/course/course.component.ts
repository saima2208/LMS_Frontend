import { Component } from '@angular/core';
import { Course } from '../course.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../course.service';
import { User } from '../../users/user.model';


@Component({
  selector: 'app-course',
  imports: [FormsModule, CommonModule, NgFor, RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  course: Course[] = [];
  student: User[] = [];

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.course = data;
    });
  }




}
