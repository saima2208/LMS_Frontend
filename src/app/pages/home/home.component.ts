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
  imports: [FormsModule, CommonModule, NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  course: Course[] = [];
  feedbacks: Feedback[] = [];
  students: User[] = [];

  constructor(private router: Router, private courseService: CourseService, private feedbackService: FeedbackService, private userService: UserService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.course = data;
      this.course = data.sort((a, b) => b.id - a.id);

    });
    // this.feedbackService.getFeedbacks().subscribe((data) => {
    //   this.feedbacks = data;

    // });

    // this.userService.getUserByRole('STUDENT').subscribe((data) => {
    //   this.students = data;
    // });
    this.getFeedbacks();
    this.getStudents();

  }


  getStudents() {
    this.userService.getUserByRole('STUDENT').subscribe({
      next: (data) => {
        (this.students = data);
        console.log(this.students)
      },
      error: (err) => console.error('Failed to load students:', err),
    });
  }

  getFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe({
      next: (data) => {
        this.feedbacks = data
          .map((feedback) => {
            const student = this.students.find(
              (user) => user.id === feedback.studentId
            );

            if (student) {
              feedback.image = student.avatarUrl || 'UserImage/blank.jpg'; // Fallback image
              feedback.studentName = student.name; // Assign student's name
            }
            return feedback;
          })
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); // Sort by date descending

        console.log('Sorted Feedbacks:', this.feedbacks);
      },
      error: (err) => console.error('Failed to load feedbacks:', err),
    });
  }

}
