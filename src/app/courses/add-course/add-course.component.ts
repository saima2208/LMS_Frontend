import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Course } from '../course.model';
import { UserService } from '../../users/user.service';
import { User } from '../../users/user.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
})
export class AddCourseComponent implements OnInit {
  cor: Course = new Course();

  isUpdate = false;
  teachers: User[] = [];

  constructor(
    private router: Router,
    private courseService: CourseService,
    private userService: UserService
  ) {
    const nav = this.router.getCurrentNavigation();

    if (nav?.extras.state && nav.extras.state['a']) {
      this.cor = nav.extras.state['a'];

      this.isUpdate = true;
    }
  }

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.userService.getUserByRole('TEACHER').subscribe({
      next: (data) => {
        (this.teachers = data);
        console.log(this.teachers)
      },
      error: (err) => console.error('Failed to load teachers:', err),
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      // Update course logic
      this.courseService.updateCourse(this.cor.id, this.cor).subscribe({
        next: () => {
          this.router.navigate(['/course-list']);
        },
        error: (err) => {
          alert('Failed to update course: ' + err.message);
          console.error(err);
        },
      });
    } else {
      // Create course logic
      this.courseService.createCourse(this.cor).subscribe({
        next: () => {
          this.router.navigate(['/course-list']);
          this.cor = new Course(); // Reset the form model
        },
        error: (err) => {
          alert('Failed to create course: ' + err.message);
          console.error(err);
        },
      });
    }
  }
}
