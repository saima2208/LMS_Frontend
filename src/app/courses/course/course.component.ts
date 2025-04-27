import { Component } from '@angular/core';
import { Course } from '../../model/course.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  course: Course[] = [];



  ngOnInit(): void {

    let allCourse = JSON.parse(localStorage.getItem('courses') || '[]');
    this.course = allCourse;


  }



}
