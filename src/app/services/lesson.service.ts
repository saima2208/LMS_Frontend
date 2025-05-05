import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../model/lesson.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private apiUrl = 'http://localhost:8080/api/lessons';

  constructor(private http: HttpClient) {}

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.apiUrl);
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
