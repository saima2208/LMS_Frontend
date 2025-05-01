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


  // this is object for this  class

 courses:Course[]=[];

  constructor(private router:Router, private courseService: CourseService){


  }


  ngOnInit(): void {

    this.saveCourses();

  }

  // this is the method to get all the data from the data base

  saveCourses(){


    this.courseService.getAllCourses().subscribe(data=>{

            this.courses=data;
    });

  }

  editCourse(a:Course){

    this.router.navigate(['/add-course'],{state:{a}})
  }

  deleteCourse(a:Course){

    if(confirm("are you want to delete?")){


     this.courseService.deleteCourse(a.course_id).subscribe(()=>{

      this.saveCourses();
     });


    }
  }

  addNewCourse(): void {
         this.router.navigate(['/add-course'], { state: { course: new Course() } });
       }


}
