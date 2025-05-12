import { Component } from '@angular/core';
import { Assignment } from '../assignment.model';
import { Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { AdminDashboardComponent } from "../../admins/admin-dashboard/admin-dashboard.component";

@Component({
  selector: 'app-assignment-list',
  imports: [AdminDashboardComponent],
  templateUrl: './assignment-list.component.html',
  styleUrl: './assignment-list.component.css'
})
export class AssignmentListComponent {
 assignments: Assignment[] = [];

  constructor(private router: Router, private assignmentService: AssignmentService) {}

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe((data) => {
      this.assignments = data;

    });
  }

  // this is the method to get all the data from the data base

  saveAssignment() {
    this.assignmentService.getAssignments().subscribe((data) => {
      this.assignments = data;
    });
  }

  editAssignment(a: Assignment) {
    this.router.navigate(['/add-assignment'], { state: { a } });
  }

  deleteAssignment(a: Assignment) {
    if (confirm('are you want to delete?')) {
      this.assignmentService.deleteAssignment(a.id).subscribe(() => {
        this.saveAssignment();
      });
    }
  }

  addNewAssignment(): void {
    this.router.navigate(['/add-assignment'], { state: { assignment: new Assignment() } });
  }
}
