import { Component } from '@angular/core';
import { StudentDashboardComponent } from "../student-dashboard/student-dashboard.component";

@Component({
  selector: 'app-student',
  imports: [StudentDashboardComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
