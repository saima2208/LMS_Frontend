import { Component } from '@angular/core';
import { Lesson } from '../../model/lesson.model';
import { Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-lesson',
  imports: [FormsModule],
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.css'
})
export class AddLessonComponent {
  // this is object initialized  for the class
  lessons: Lesson = new Lesson();

  isUpdate=false;

  constructor(private router:Router, private lessonService: LessonService){

    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.lessons=nav.extras.state['a'];

      this.isUpdate=true;
    }

    }

    // this is the form Method

    onSubmit(){

      if(this.isUpdate){


        this.lessonService.updateLesson(this.lessons.lesson_id,this.lessons).subscribe(()=>{

          this.router.navigate(['/lesson-list']);
        })
      }

      else{


        this.lessonService.createLesson(this.lessons).subscribe(()=>{

          this.lessons= new Lesson()


        })
      }
      }

    }


