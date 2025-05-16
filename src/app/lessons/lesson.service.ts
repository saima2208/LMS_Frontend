import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../lessons/lesson.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private apiUrl = 'http://localhost:8080/api/lessons';

  constructor(private http: HttpClient) {}

  getLessons(): Observable<Lesson[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => {
          const lesson = new Lesson();
          lesson.id = item.id;
          lesson.courseId = item.course.id;
          lesson.topic = item.topic;
          lesson.content = item.content;
          lesson.video_url = ''; // Add video URL if your API includes it
          return lesson;
        })
      )
    );
  }

  getLessonById(id: number): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.apiUrl}/${id}`);
  }

  getLessonsByCourseId(courseId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.apiUrl}?courseId=${courseId}`);
  }

  createLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.apiUrl, lesson, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateLesson(id: number, lesson: Lesson): Observable<Lesson> {
    return this.http.put<Lesson>(`${this.apiUrl}/${id}`, lesson, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteLesson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
