import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Enrollment } from '../model/enrollment.model';
import { EnrollmentService } from '../services/enrollment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment',
  imports: [FormsModule],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent {
  enrollmentData = {
    fullName: '',
    email: '',
    mobile: '',
    confirmMobile: '',
    paymentMethod: '',
  };

  submitForm() {
    if (!this.isMobileConfirmed()) {
      alert('Mobile numbers do not match!');
      return;
    }

    if (!this.enrollmentData.paymentMethod) {
      alert('Please select a payment method!');
      return;
    }

    // Simulate submission
    console.log('Enrollment Data Submitted:', this.enrollmentData);
    alert('Form submitted successfully! Confirm you within 24 hours');
    this.resetForm();
    window.location.href="/home";

  }

  isMobileConfirmed(): boolean {
    return this.enrollmentData.mobile === this.enrollmentData.confirmMobile;
 
  }

  resetForm() {
    this.enrollmentData = {
      fullName: '',
      email: '',
      mobile: '',
      confirmMobile: '',
      paymentMethod: '',
    };
  }


  }

