import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { Enrollment } from '../../enrollments/enrollment.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mycourses',
  imports: [FormsModule,NgFor],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent implements OnInit {

  courses: Course[] = [];


  constructor(private router: Router, private userService: UserService) { }

    ngOnInit(): void {

      this.getCourses();

    }


   getCourses() {
    
  }



}


