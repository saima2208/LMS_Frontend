import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Lesson } from '../lesson.model';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lesson-list',
  imports: [],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css',
})
export class LessonListComponent implements OnInit {
  // this is object for this  class

  lessons: Lesson[] = [];

  constructor(private router: Router, private lessonService: LessonService) {}

  ngOnInit(): void {
    this.lessonService.getLessons().subscribe((data) => {
      this.lessons = data;

    });
  }

  // this is the method to get all the data from the data base

  saveLesson() {
    this.lessonService.getLessons().subscribe((data) => {
      this.lessons = data;
    });
  }

  editLesson(a: Lesson) {
    this.router.navigate(['/add-lesson'], { state: { a } });
  }

  deleteLesson(a: Lesson) {
    if (confirm('are you want to delete?')) {
      this.lessonService.deleteLesson(a.id).subscribe(() => {
        this.saveLesson();
      });
    }
  }

  addNewLesson(): void {
    this.router.navigate(['/add-lesson'], { state: { lesson: new Lesson() } });
  }
}
