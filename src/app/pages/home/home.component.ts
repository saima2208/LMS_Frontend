import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../../courses/course.service';
import { Course } from '../../courses/course.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, NgFor,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
course: Course[] = [];

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.course = data;
      this.course = data.sort((a, b) => b.id - a.id);

    });
}
}
