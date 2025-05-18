import { Component, OnInit } from '@angular/core';
import { StudentDashboardComponent } from "../../students/student-dashboard/student-dashboard.component";

import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Feedback } from '../feedback.model';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';

@Component({
  selector: 'app-feedback-form',
  imports: [StudentDashboardComponent, FormsModule, CommonModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'], // Fixed `styleUrl` to `styleUrls` (plural)
})
export class FeedbackFormComponent  {
  feedbacks: Feedback = new Feedback();
  students: User[] = [];
  isUpdate = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feedbackService: FeedbackService,
    private userService: UserService
  ) {
    const nav = this.router.getCurrentNavigation();

    if (nav?.extras.state?.['a']) {
      this.feedbacks = { ...nav.extras.state['a'] }; // Clone state to avoid mutation
      this.isUpdate = true;
    }
  }

  // ngOnInit(): void {
  //   this.getStudent();

  //   // Subscribe to query parameters to get `studentId`
  //   this.route.queryParamMap.subscribe((params) => {
  //     const studentId = params.get('studentId');
  //     if (studentId) {
  //       this.feedbacks.studentId = +studentId; // Convert to number
  //     }
  //   });
  // }

  // getStudent(): void {
  //   this.userService.getUserByRole('STUDENT').subscribe({
  //     next: (data) => {
  //       this.students = data; // Assign fetched data to `students`
  //       console.log(this.students);
  //     },
  //     error: (err) => console.error('Failed to load students:', err),
  //   });
  // }

  onSubmit(): void {
    if (this.isUpdate) {
      this.feedbackService.updateFeedback(this.feedbacks.id!, this.feedbacks).subscribe({
        next: () => {
          alert('Feedback updated successfully!');
          this.router.navigate(['/feedback']);
        },
        error: (err) => {
          alert('Failed to update feedback: ' + err.message);
          console.error(err);
        },
      });
    } else {
      // decode token from local storage, get the id, call api with that id

      this.feedbackService.addFeedback(this.feedbacks).subscribe({
        next: () => {
          alert('Feedback submitted successfully!');
          this.router.navigate(['/feedback']);
          this.resetForm();
        },
        error: (err) => {
          alert('Failed to submit feedback: ' + err.message);
          console.error(err);
        },
      });
    }
  }

  resetForm(): void {
    this.feedbacks = new Feedback();
    this.isUpdate = false;
  }
}



