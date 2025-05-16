import { HttpClient } from '@angular/common/http';
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

  constructor(
    private enrollmentService: EnrollmentService,
    private http: HttpClient
  ) { }

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

  approveEnrollment(id: number): void {
    this.updateEnrollmentStatus(id, 'APPROVED');
  }

  // Reject Enrollment
  rejectEnrollment(id: number): void {
    this.updateEnrollmentStatus(id, 'REJECTED');
  }

  // Update Enrollment Status
  private updateEnrollmentStatus(id: number, status: string): void {
    this.enrollmentService.updateEnrollmentStatus(id, status).subscribe({
      next: (updatedEnrollment) => {
        alert(`Enrollment ${status.toLowerCase()} successfully!`);
        this.removeEnrollmentFromList(id);
      },
      error: (err) => {
        console.error(`Failed to update enrollment status: ${err.message}`);
        alert('Failed to update enrollment status. Please try again.');
      }
    });
  }

  // Remove enrollment from list after updating status
  private removeEnrollmentFromList(id: number): void {
    this.pendingEnrollments = this.pendingEnrollments.filter(enrollment => enrollment.id !== id);
  }
}
