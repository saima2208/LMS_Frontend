import { Course } from '../../courses/course.model';
import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../model/lesson.model';
import { Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { FormsModule } from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import { CourseService } from '../../courses/course.service';


@Component({
  selector: 'app-add-lesson',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.css'
})
export class AddLessonComponent implements OnInit{
  // this is object initialized  for the class
  lessons: Lesson = new Lesson();



  //  cor: Course = new Course;

  cor: Course[] = [];
   isUpdate=false;


  constructor(
     private router:Router,
     private lessonService: LessonService,
     private courseService: CourseService){

    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.lessons=nav.extras.state['a'];

      this.isUpdate=true;
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
       onSubmit() {
            if (this.isUpdate) {
              // Update course logic
              this.lessonService.updateLesson(this.lessons.id!, this.lessons).subscribe({
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
              this.lessonService.createLesson(this.lessons).subscribe({
                next: () => {
                  this.router.navigate(['/lesson-list']);
                  this.lessons = new Lesson(); // Reset the form model
                },
                error: (err) => {
                  alert('Failed to create lesson: ' + err.message);
                  console.error(err);
                },
              });
            }
          }


    }


