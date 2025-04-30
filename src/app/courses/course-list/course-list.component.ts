import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Course } from '../../model/course.model';

import { CourseService } from '../../services/course.service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-course-list',
  imports: [NgIf],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
courses:Course[]=[];

constructor(private router: Router,courseService:CourseService) {}

  ngOnInit(): void {
    // Load courses from localStorage
    this.courses = JSON.parse(localStorage.getItem('courses') || '[]');
  }

  // Navigate to edit page
  editCourse(course: Course): void {
    const id = course.course_id;
    this.router.navigate(['add-course'], { state: { course } });
  }

  // Delete course and update localStorage
  deleteCourse(course: Course): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courses = this.courses.filter((p) => p.course_id !== course.course_id);
      localStorage.setItem('courses', JSON.stringify(this.courses));
    }
  }
  addNewCourse(): void {
    this.router.navigate(['/add-course'], { state: { course: new Course(0,0,0, '', '','','', 0,'') } });
  }


// // this is object for this  class


  // this is object for this  class

//  courses:Course[]=[];

//   constructor(private router:Router, private courseService: CourseService){


//   }


//   ngOnInit(): void {
      
//     this.saveCourses();

//   }

//   // this is the method to get all the data from the data base

//   saveCourses(){


//     this.courseService.getAllCourses().subscribe(data=>{

//             this.courses=data;
//     });

//   }

//   editCourse(a:Course){

//     this.router.navigate(['/add-course'],{state:{a}})
//   }

//   deleteCourse(a:Course){

//     if(confirm("are you want to delete?")){


//      this.courseService.deleteCourse(a.course_id).subscribe(()=>{

//       this.saveCourses();
//      });

     
//     }
//   }

//   addNewCourse(): void {
//          this.router.navigate(['/add-course'], { state: { course: new Course(0,0,0, '', '','','', 0,'') } });
//        }


}
