import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../enrollment.model';
import { EnrollmentService } from '../enrollment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollment-list',
  imports: [CommonModule],
  templateUrl: './enrollment-list.component.html',
  styleUrl: './enrollment-list.component.css'
})
export class EnrollmentListComponent implements OnInit{
enrollments: Enrollment[] = [];

  constructor(private router: Router, private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getAllEnrollments().subscribe((data) => {
      this.enrollments = data;

    });
  }

  // this is the method to get all the data from the data base

  saveEnrollment() {
    this.enrollmentService.getAllEnrollments().subscribe((data) => {
      this.enrollments = data.sort(
      (a, b) => new Date(b.enrollmentDate).getTime() - new Date(a.enrollmentDate).getTime()
        );
      // this.enrollments = data.sort((a, b) => b.id - a.id);
    });
  }

  editAssignment(a: Enrollment) {
    this.router.navigate(['/add-enrollment'], { state: { a } });
  }

  deleteAssignment(a: Enrollment) {
    if (confirm('are you want to delete?')) {
      this.enrollmentService.deleteEnrollment(a.id).subscribe(() => {
        this.saveEnrollment();
      });
    }
  }
}
