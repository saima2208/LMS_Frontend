import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';
import { CourseService } from '../../courses/course.service';
import { Course } from '../../courses/course.model';

@Component({
  selector: 'app-teacher-list',
  imports: [],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit{
//  user: User = new User();

   isUpdate = false;
   teacher: User[] = [];
  //  course: Course= new Course();
  course: Course[] =[];
  userId?: number;

   constructor(
     private router: Router,

     private userService: UserService,
     private courseService:CourseService
   ) {

   }

   ngOnInit() {
     this.getTeachers();
     this.getCourse(0);
    this.userId = Number(localStorage.getItem('id'));
   }
  getCourse(userId:number) {
    this.userService.getCoursesByUserId(userId).subscribe({
      next: (data) => {
        (this.course = data);
        console.log(this.course)
      },
      error: (err) => console.error('Failed to load course Name: ',err),
    });
  }

   getTeachers() {
     this.userService.getUserByRole('TEACHER').subscribe({
       next: (data) => {
         (this.teacher = data);
         console.log(this.teacher)
       },
       error: (err) => console.error('Failed to load teachers:', err),
     });
   }
}





