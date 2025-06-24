import { Component } from '@angular/core';
import { AssignmentService } from '../../assignments/assignment.service';
import { SubmitAssignmentService } from '../services/submit-assignment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
submissionId: any;

    constructor(private submissionService: SubmitAssignmentService,
      private assignmentService: AssignmentService
    ) { }

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
