import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../model/lesson.model';

@Component({
  selector: 'app-lesson-list',
  imports: [],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
  export class LessonListComponent implements OnInit {

 // this is object for this  class

 lessons:Lesson[]=[];

  constructor(private router:Router, private lessonService: LessonService){


  }






  ngOnInit(): void {
    this.lessonService.getLessons().subscribe((data) => {
      this.lessons = data;
    });
  }



  // ngOnInit(): void {

  //   this.saveLesson();

  // }

  // this is the method to get all the data from the data base

  saveLesson(){


    this.lessonService.getLessons().subscribe(data=>{

            this.lessons=data;
    });

  }

  editLesson(a:Lesson){

    this.router.navigate(['/add-course'],{state:{a}})
  }

  deleteLesson(a:Lesson){

    if(confirm("are you want to delete?")){


     this.lessonService.deleteLesson(a.lesson_id).subscribe(()=>{

      this.saveLesson();
     });


    }
  }

  addNewLesson(): void {
         this.router.navigate(['/add-lesson'], { state: { lesson: new Lesson() } });
       }

}
