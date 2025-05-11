
import { Component } from '@angular/core';
import { AdminDashboardComponent } from "../../admins/admin-dashboard/admin-dashboard.component";
import { Router } from '@angular/router';

import { Course } from '../../courses/course.model';
import { RecordClassService } from '../record-class.service';
import { CourseService } from '../../courses/course.service';
import { FormsModule } from '@angular/forms';
import { RecordClass } from '../recordClass.model';




@Component({
  selector: 'app-add-record-class',
  imports: [AdminDashboardComponent, FormsModule],
  templateUrl: './add-record-class.component.html',
  styleUrl: './add-record-class.component.css'
})
export class AddRecordClassComponent {
  recordClass: RecordClass = new RecordClass();

  isUpdate = false;

  //  cor: Course = new Course;

  cor: Course[] = [];


  constructor(
    private router: Router,
    private recordClassService: RecordClassService,
    private courseService: CourseService) {

    const nav = this.router.getCurrentNavigation();

    if (nav?.extras.state && nav.extras.state['a']) {

      this.recordClass = nav.extras.state['a'];

      this.isUpdate = true;
    }
  }

  ngOnInit() {
    this.getCourses();
  }

  // getCourses() {
  //   this.courseService.getCourseById(this.cor.id).subscribe({
  //     next: (data) => {
  //       this.cor = data;
  //       console.log(this.cor);
  //     },
  //     error: (err) => console.error('Failed to load courses:', err),
  //   });
  // }

  getCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.cor = data; // Store all courses in the array
        console.log('Courses fetched:', this.cor);
      },
      error: (err) => console.error('Failed to load courses:', err),
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      // Update course logic
      this.recordClassService.updateRecordClass(this.recordClass.id!, this.recordClass).subscribe({
        next: () => {
          this.router.navigate(['/lesson-list']);
        },
        error: (err) => {
          alert('Failed to update lesson: ' + err.message);
          console.error(err);
        },
      });
    } else {
      // Create course logic
      this.recordClassService.createRecordClass(this.recordClass).subscribe({
        next: () => {
          this.router.navigate(['/recordClasses']);
          this.recordClass = new RecordClass(); // Reset the form model
        },
        error: (err) => {
          alert('Failed to create recordClass: ' + err.message);
          console.error(err);
        },
      });
    }
  }

}
