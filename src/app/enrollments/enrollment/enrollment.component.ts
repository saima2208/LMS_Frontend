import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Enrollment } from '../enrollment.model';
import { EnrollmentService } from '../enrollment.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enrollment',
  imports:[FormsModule],
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css'],
})
export class EnrollmentComponent implements OnInit {
  enrollments: Enrollment = new Enrollment();
  isUpdate = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enrollmentService: EnrollmentService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const courseTitle = params.get('title');
      if (courseTitle) {
        this.enrollments.courseName = courseTitle;
      }
    });

    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['a']) {
      this.enrollments = nav.extras.state['a'];
      this.isUpdate = true;
    }
  }

  onSubmit() {
    if (this.isUpdate) {
      this.enrollmentService.updateEnrollment(this.enrollments.id!, this.enrollments).subscribe({
        next: () => {
          alert('Enrollment updated successfully!');
          this.router.navigate(['/enroll-list']);
        },
        error: (err) => {
          alert('Failed to update enrollment: ' + err.message);
          console.error(err);
        },
      });
    } else {
      this.enrollmentService.createEnrollment(this.enrollments).subscribe({
        next: () => {
          alert('Enrollment created successfully!');
          this.router.navigate(['/pending-enroll']);
          this.resetForm();
        },
        error: (err) => {
          alert('Failed to create enrollment: ' + err.message);
          console.error(err);
        },
      });
    }
  }

  resetForm() {
    this.enrollments = new Enrollment();
    this.isUpdate = false;
  }
}
