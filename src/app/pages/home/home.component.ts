import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../../courses/course.service';
import { Course } from '../../courses/course.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Feedback } from '../../feedbacks/feedback.model';
import { FeedbackService } from '../../feedbacks/feedback.service';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, NgFor,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
course: Course[] = [];
feedbacks: Feedback[] = [];
students: User[] =[];

  constructor(private router: Router, private courseService: CourseService,private feedbackService:FeedbackService,private userService:UserService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.course = data;
      this.course = data.sort((a, b) => b.id - a.id);

    });
    this.feedbackService.getFeedbacks().subscribe((data) => {
      this.feedbacks = data;

    });

    this.userService.getUserByRole('STUDENT').subscribe((data) => {
      this.students = data;
    });

}
}
