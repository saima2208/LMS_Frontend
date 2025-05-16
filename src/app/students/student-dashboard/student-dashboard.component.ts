import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Feedback } from '../../feedbacks/feedback.model';
import { FeedbackService } from '../../feedbacks/feedback.service';

@Component({
  selector: 'app-student-dashboard',
  imports: [],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
feedback: Feedback[] = [];

  constructor(private router: Router, private feedbackService: FeedbackService) {}
}
