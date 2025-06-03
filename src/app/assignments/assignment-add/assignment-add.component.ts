import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Assignment } from '../assignment.model';
import { Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { CourseService } from '../../courses/course.service';
import { Course } from '../../courses/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-add',
  imports: [FormsModule,CommonModule],
  templateUrl: './assignment-add.component.html',
  styleUrl: './assignment-add.component.css'
})
export class AssignmentAddComponent {
 // this is object initialized  for the class
  assignments: Assignment = new Assignment();

  isUpdate=false;

    corse: Course = new Course();

  cor: Course[] = [];


  constructor(
     private router:Router,
     private assignmentService: AssignmentService,
     private courseService: CourseService){

    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.assignments=nav.extras.state['a'];

      this.isUpdate=true;
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
      this.courseService.getAllCourses().subscribe({
        next: (data) => {
          this.cor = data; // Store all courses in the array
          console.log('Courses fetched:', this.cor);
        },
        error: (err) => console.error('Failed to load courses:', err),
      });
    }

       onSubmit() {
            if (this.isUpdate) {
              // Update Assignment logic
              this.assignmentService.updateAssignment(this.assignments.id!, this.assignments).subscribe({
                next: () => {
                  this.router.navigate(['/assignment-list']);
                },
                error: (err) => {
                  alert('Failed to update assignments: ' + err.message);
                  console.error(err);
                },
              });
            } else {
              // Create assignments logic
              this.assignmentService.createAssignment(this.assignments).subscribe({
                next: () => {
                  this.router.navigate(['/assignment-list']);
                  this.assignments = new Assignment(); // Reset the form model
                },
                error: (err) => {
                  alert('Failed to create assignments: ' + err.message);
                  console.error(err);
                },
              });
            }
          }

}
