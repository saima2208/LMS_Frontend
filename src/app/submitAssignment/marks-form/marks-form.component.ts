import { Component, OnInit } from '@angular/core';
import { MarksService } from '../services/marks.service';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';
import { AssignmentService } from '../../assignments/assignment.service';
import { CourseService } from '../../courses/course.service';
import { Observable } from 'rxjs';
import { User } from '../../users/user.model';
import { Course } from '../../courses/course.model';
import { Assignment } from '../../assignments/assignment.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marks-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './marks-form.component.html',
  styleUrl: './marks-form.component.css'
})
export class MarksFormComponent implements OnInit {
  // marks: Marks[] = [];
  mark: Marks = new Marks();

  students: User[] = [];
  courses: Course[] = [];
  assignments: Assignment[] = [];
  isUpdate = false;

  constructor(
    private router: Router,
    private marksService: MarksService,
    private userService: UserService,
    private courseService: CourseService,
    private assignmentService: AssignmentService
  ) { }

  ngOnInit(): void {
    this.getCourses();
    this.getAssignments();
    this.getStudents();
  }
  getStudents() {
    this.userService.getUserByRole('STUDENT').subscribe({
      next: (data) => {
        (this.students = data);
        console.log(this.students)
      },
      error: (err) => console.error('Failed to load students:', err),
    });
  }


  getAssignments() {
    this.assignmentService.getAssignments().subscribe({
      next: (data) => {
        (this.assignments = data);
        console.log(this.assignments)
      },
      error: (err) => console.error('Failed to load assignments: ', err),
    });
  }
  getCourses() {
this.courseService.getAllCourses().subscribe({
  next: (data) => {
    (this.courses = data);
    console.log(this.courses)
  },
  error: (err) => console.error('Failed to load courses: ', err)
})
  }

  onSubmit(): void {
    if (this.isUpdate) {

      this.marksService.updateMark(this.mark.id, this.mark).subscribe({
        next: () => {
          this.router.navigate(['/mark-list']);
        },
        error: (err) => {
          alert('Failed to update mark: ' + err.message);
          console.error(err);
        },
      });
    } else {
      console.log("add mark clicked")
      this.marksService.addMarks(this.mark).subscribe({
        next: () => {
          this.router.navigate(['/mark-list']);
        },
        error: (err) => {
          alert('Failed to add mark: ' + err.message);
          console.error(err);
        },
      });
    }
  }

}

export class Marks {
  id: number;
  courseId: number
  assignmentId: number;
  studentId: number;
  StudentName: String;
  marks: number;

  constructor() {
    this.id = 0;
    this.courseId = 0;
    this.assignmentId = 0;
    this.studentId = 0;
    this.StudentName = '';
    this.marks = 0;
  }
}
