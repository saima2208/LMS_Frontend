import { Component, OnInit } from '@angular/core';
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

    // onSubmit(){

    //   if(this.isUpdate){


    //     this.lessonService.updateLesson(this.lessons.id,this.lessons).subscribe(()=>{

    //       this.router.navigate(['/lesson-list']);
    //     })
    //   }

    //   else{


    //     this.lessonService.createLesson(this.lessons).subscribe(()=>{

    //       this.lessons= new Lesson()


    //     })
    //   }
    //   }


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


