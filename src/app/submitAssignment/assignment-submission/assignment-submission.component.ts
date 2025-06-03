import { Assignment } from './../../assignments/assignment.model';
import { AssignmentService } from './../../assignments/assignment.service';
import { Component, OnInit } from '@angular/core';
import { SubmitAssignmentService } from '../services/submit-assignment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from '../../students/student-dashboard/student-dashboard.component';


@Component({
  selector: 'app-assignment-submission',
  imports: [FormsModule,CommonModule],
  templateUrl: './assignment-submission.component.html',
  styleUrl: './assignment-submission.component.css'
})
export class AssignmentSubmissionComponent implements OnInit {
  selectedFile: File | null = null;
  studentId!: number;
  assignmentId!: number;
  submissionId: any;
  courseId: number | undefined;
  assignments: Assignment = new Assignment();
  assignment: Assignment[] = [];

  constructor(private submissionService: SubmitAssignmentService,
    private assignmentService: AssignmentService
  ) { }

  ngOnInit(): void {
    this.studentId = Number(localStorage.getItem('id'));
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignmentByCourseId(this.assignments.courseId).subscribe({
      next: (data) => {
        this.assignment = data;
        console.log(this.assignment);
      },
      error: (err) => console.log('Failed to load Assignments: ', err ),
    });
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submitAssignment(): void {
    if (!this.selectedFile || !this.assignmentId) {
      alert('Please select a file and enter student and assignment IDs');
      return;
    }

    this.submissionService
      .submitAssignment(this.studentId, this.assignmentId, this.selectedFile)
      .subscribe({
        next: (res) => alert('Assignment submitted successfully!'),
        error: (err) => alert('Error submitting assignment: ' + err.message),
      });
  }

  // downloadAssignment(submissionId: number): void {
  //   this.submissionService.downloadSubmittedAssignment(submissionId).subscribe({
  //     next: (blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement('a');
  //       a.href = url;
  //       a.download = 'submitted-assignment'; // Optionally get filename from response headers
  //       a.click();
  //       window.URL.revokeObjectURL(url);
  //     },
  //     error: (err) => alert('Error downloading file: ' + err.message),
  //   });
  // }
}
