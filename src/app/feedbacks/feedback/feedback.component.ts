import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback.model';
import { CommonModule } from '@angular/common';
import { Course } from '../../courses/course.model';

@Component({
  selector: 'app-feedback',
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {
  isUpdate = false;
  students: User[] = [];
  feedbacks: Feedback[] = [];
  course: Course[] = [];

  constructor(
    private router: Router,
    private feedbackService: FeedbackService,
    private userService: UserService,
  ) { }
  ngOnInit() {
    this.getFeedbacks();
    this.getStudents();
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
  getStudents() {
    this.userService.getUserByRole('STUDENT').subscribe({
      next: (data) => {
        (this.students = data);
        console.log(this.students)
      },
      error: (err) => console.error('Failed to load students:', err),
    });
  }
}
