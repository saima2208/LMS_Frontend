import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course, CourseDetails } from '../course.model';
import { CourseService } from '../course.service';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';
import { Lesson } from '../../lessons/lesson.model';
import { LessonService } from '../../lessons/lesson.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {

  // courses: Course[] = [];
  teacher: User[] = [];
  lessons: Lesson[] = [];

  courses:Course = new Course();
  // teacher: User = new User();
  // lessons : Lesson = new Lesson();

  courseDetails: CourseDetails = new CourseDetails();

  constructor(
    private router: Router,
    private courseService: CourseService,
    private userService: UserService,
    private lessonService: LessonService
  ) { }

  ngOnInit(): void {
    this.saveCourse();
    this.getTeachers();
    this.getLessons();
  }
  getLessons() {
    this.lessonService.getLessons().subscribe((data) => {
      this.lessons = data;
    })
  }
  getTeachers() {
    this.userService.getUserByRole('Teacher').subscribe((data) => {
      this.teacher = data;
    })
  }

  saveCourse() {
    this.courseService.getCurrentCourse().subscribe((data) => {
      this.courses = data;
    });
  }


}
