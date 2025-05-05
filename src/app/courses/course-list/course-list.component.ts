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
export class CourseListComponent  {
// this is object for this  class

courses:Course[]=[];

constructor(private router:Router , private courseService: CourseService){


}


ngOnInit(): void {

  this.getCourses()

 // this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

}


// thi is the method to get all the data from the database

getCourses(){


  this.courseService.getCourses().subscribe((data)=>{

     this.courses=data;
  })
}

// thisi is the method to edit data in the database


Edit(a:Course){

  this.router.navigate(['/add-course'],{state:{a}})
}


// this is the method to delete data from the database


Delete(a:Course) : void {

   if(a.course_id !=null){


  if(confirm("are you want to delete?")){

    this.courseService.getCourses().subscribe(()=>{

        this.getCourses()
    })

   // this.collect_order=this.collect_order.filter(f=>f!==a);

     //localStorage.setItem('b',JSON.stringify(this.collect_order))
  }

   }

   else{

     alert('Id is Invalid?')
   }

  }

  addNewCourse(): void {
    this.router.navigate(['/add-course'], { state: { course: new Course() } });
  }
}
