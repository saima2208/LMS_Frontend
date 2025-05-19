import { Component } from '@angular/core';
import { Course } from '../course.model';
import { Enrollment } from '../../enrollments/enrollment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mycourses',
  imports: [FormsModule],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent {
course:Course[]=[];
enrollments:Enrollment[]  =[];
}
