// import { Component, OnInit } from '@angular/core';
// import { EnrollmentService } from '../enrollment.service';
// import { Enrollment } from '../enrollment.model';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-pending-enrollment',
//   imports: [CommonModule],
//   templateUrl: './pending-enrollment.component.html',
//   styleUrl: './pending-enrollment.component.css'
// })
// export class PendingEnrollmentComponent implements OnInit{

//    pendingEnrollments: Enrollment[] = [];

//   constructor(private enrollmentService: EnrollmentService) {}

//   ngOnInit() {
//     // Fetch the list of pending enrollments on component initialization
//     this.loadPendingEnrollments();
//   }

//   // Fetch pending enrollments
//   loadPendingEnrollments() {
//     this.enrollmentService.getAllEnrollments().subscribe({
//       next: (data) => {
//         this.pendingEnrollments = data.filter(enrollment => enrollment.status === 'PENDING');
//       },
//       error: (err) => {
//         console.error('Failed to load pending enrollments:', err);
//       }
//     });
//   }

//   // Approve an enrollment
//   approveEnrollment(enrollment: Enrollment) {
//     enrollment.status = 'APPROVED'; // Change status to 'APPROVED'
//     this.updateEnrollmentStatus(enrollment);
//   }

//   // Reject an enrollment
//   rejectEnrollment(enrollment: Enrollment) {
//     enrollment.status = 'REJECTED'; // Change status to 'REJECTED'
//     this.updateEnrollmentStatus(enrollment);
//   }

//   // Update enrollment status
//   updateEnrollmentStatus(enrollment: Enrollment) {
//     this.enrollmentService.updateEnrollment(enrollment.id, enrollment).subscribe({
//       next: () => {
//         alert('Enrollment status updated successfully!');
//         this.loadPendingEnrollments(); // Reload pending enrollments after update
//       },
//       error: (err) => {
//         alert('Failed to update enrollment status: ' + err.message);
//         console.error(err);
//       }
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Enrollment } from '../enrollment.model';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from "../../admins/admin-dashboard/admin-dashboard.component";

@Component({
  selector: 'app-pending-enrollment',
  imports: [CommonModule, AdminDashboardComponent],
  templateUrl: './pending-enrollment.component.html',
  styleUrl: './pending-enrollment.component.css'
})
export class PendingEnrollmentComponent implements OnInit {
  pendingEnrollments: Enrollment[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit() {
    this.loadPendingEnrollments();
  }

  loadPendingEnrollments() {
    this.enrollmentService.getAllEnrollments().subscribe({
      next: (data) => {
        this.pendingEnrollments = data.filter(enrollment => enrollment.status === 'PENDING');
      },
      error: (err) => {
        console.error('Failed to load pending enrollments:', err);
      }
    });
  }

  approveEnrollment(enrollmentId: number) {
    
  }

  rejectEnrollment(enrollmentId: number) {

   }
}
