import { Component } from '@angular/core';
import { SubmitAssignmentService } from '../services/submit-assignment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment-submission',
  imports: [FormsModule],
  templateUrl: './assignment-submission.component.html',
  styleUrl: './assignment-submission.component.css'
})
export class AssignmentSubmissionComponent {
  selectedFile: File | null = null;
  studentId!: number;
  assignmentId!: number;
submissionId: any;

  constructor(private submissionService: SubmitAssignmentService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submitAssignment(): void {
    if (!this.selectedFile || !this.studentId || !this.assignmentId) {
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

  downloadAssignment(submissionId: number): void {
    this.submissionService.downloadSubmittedAssignment(submissionId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'submitted-assignment'; // Optionally get filename from response headers
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => alert('Error downloading file: ' + err.message),
    });
  }
}
