
import { Component, OnInit } from '@angular/core';
import { AdminDashboardComponent } from "../../admins/admin-dashboard/admin-dashboard.component";
import { Router } from '@angular/router';

import { Course } from '../../courses/course.model';
import { RecordClassService } from '../record-class.service';
import { CourseService } from '../../courses/course.service';
import { FormsModule } from '@angular/forms';
import { RecordClass } from '../recordClass.model';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-add-record-class',
  imports: [AdminDashboardComponent, FormsModule, CommonModule],
  templateUrl: './add-record-class.component.html',
  styleUrl: './add-record-class.component.css'
})
export class AddRecordClassComponent implements OnInit {
  recordClass: RecordClass = new RecordClass();



  cor: Course[] = [];
  isUpdate = false;


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



  getCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.cor = data; // Assign fetched courses to the list
        console.log('Fetched courses:', this.cor);
      },
      error: (err) => console.error('Failed to load courses:', err),
    });
  }




  onSubmit(): void {
    if (this.isUpdate) {
      this.recordClassService.updateRecordClass(this.recordClass.id!, this.recordClass).subscribe({
        next: () => this.router.navigate(['/recordClasses']),
        error: (err) => {
          alert('Failed to update recordClasses: ' + err.message);
          console.error(err);
        },
      });
    } else {
      this.recordClassService.createRecordClass(this.recordClass).subscribe({
        next: () => {
          this.router.navigate(['/recordClasses']);
          this.recordClass = new RecordClass(); // Reset form model
        },
        error: (err) => {
          alert('Failed to create recordClass: ' + err.message);
          console.error(err);
        },
      });
    }
  }
}
