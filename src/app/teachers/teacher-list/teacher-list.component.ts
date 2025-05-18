import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';
import { CourseService } from '../../courses/course.service';

@Component({
  selector: 'app-teacher-list',
  imports: [],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit{
//  user: User = new User();

   isUpdate = false;
   teachers: User[] = [];

   constructor(
     private router: Router,
     private courseService: CourseService,
     private userService: UserService
   ) {
    
   }

   ngOnInit() {
     this.getTeachers();
   }

   getTeachers() {
     this.userService.getUserByRole('TEACHER').subscribe({
       next: (data) => {
         (this.teachers = data);
         console.log(this.teachers)
       },
       error: (err) => console.error('Failed to load teachers:', err),
     });
   }
}





