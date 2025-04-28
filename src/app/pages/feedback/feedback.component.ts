import { Component } from '@angular/core';
import { Feedback } from '../../model/feedbackmodel';
import { User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
 feedback: Feedback[] = [];
 user: User[] = [];



  ngOnInit(): void {

    let allFeedback = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    this.feedback = allFeedback;


  }

}
