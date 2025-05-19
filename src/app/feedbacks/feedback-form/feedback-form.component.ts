import { Component, OnInit } from '@angular/core';
import { StudentDashboardComponent } from "../../students/student-dashboard/student-dashboard.component";

import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Feedback } from '../feedback.model';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';
import { AuthService } from '../../core/auth.service';
// import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-feedback-form',
  imports: [StudentDashboardComponent, FormsModule, CommonModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'], // Fixed `styleUrl` to `styleUrls` (plural)
})
export class FeedbackFormComponent  implements OnInit{


feedbacks: Feedback = new Feedback();
  students: User[] = [];
  isUpdate = false;
  currentUserId?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feedbackService: FeedbackService,
    private userService: UserService,
    private authService: AuthService
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state?.['a']) {
      this.feedbacks = { ...nav.extras.state['a'] }; // Clone state to avoid mutation
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    this.currentUserId = Number(localStorage.getItem('id'));
  }


  /**
   * Decode token from localStorage to extract current user ID
   */
  // private decodeToken(): void {
  //   const token = localStorage.getItem('access_token'); // Replace `authToken` with your token key
  //   if (token) {
  //     try {
  //       const decodedToken: any = jwt_decode(token);
  //       //decodedToken.Id; // Replace `userId` with the appropriate field in your token

  //     } catch (error) {
  //       console.error('Error decoding token:', error);
  //     }
  //   } else {
  //     console.error('No token found in localStorage.');
  //   }
  // }


  /**
   * Handle form submission
   */
  onSubmit(): void {



    if (!this.currentUserId) {
      alert('Unable to determine the current user. Please log in again.');
      return;
    }

  // Assign the current user's ID to the feedback object
    this.feedbacks.studentId = this.currentUserId;

    if (this.isUpdate) {
      this.updateFeedback();
    } else {
      this.addFeedback();
    }
  }

  /**
   * Add new feedback
   */
  private addFeedback(): void {
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

  /**
   * Update existing feedback
   */
  private updateFeedback(): void {
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
  }

  /**
   * Reset the feedback form
   */
  resetForm(): void {
    this.feedbacks = new Feedback();
    this.isUpdate = false;
  }
}



// function jwt_decode(token: string): any {
//   throw new Error('Function not implemented.');
//  }

