import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import {  CourseService } from '../../services/course.service';
import { Course } from '../../model/course.model';



@Component({
  selector: 'app-add-course',
  imports: [FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
})
 export class AddCourseComponent {



  cor:Course =new Course()


  isUpdate=false;

  constructor(private router:Router , private courseService: CourseService){

    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.cor=nav.extras.state['a'];

      this.isUpdate=true;
    }



    }


    onSubmit() {
      if (this.isUpdate) {
        // Update course logic
        this.courseService.updateCourse(this.cor.course_id!, this.cor).subscribe({
          next: () => {
            this.router.navigate(['/course-list']);
          },
          error: (err) => {
            alert('Failed to update course: ' + err.message);
            console.error(err);
          },
        });
      } else {
        // Create course logic
        this.courseService.createCourse(this.cor).subscribe({
          next: () => {
            this.router.navigate(['/course-list']);
            this.cor = new Course(); // Reset the form model
          },
          error: (err) => {
            alert('Failed to create course: ' + err.message);
            console.error(err);
          },
        });
      }
    }


  }
