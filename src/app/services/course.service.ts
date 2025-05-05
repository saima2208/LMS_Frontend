import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';

// export interface Lesson {
//   id?: number;
//   name: string;
// }

// export interface Course {
//   id?: number;
//   teacherId: number;
//   lessons: Lesson[];
//   name: string;
//   price: string;
//   startDate: string;
//   duration: string;
//   description: string;
// }
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/api/courses';

  constructor(private http: HttpClient) {}



  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  // getCourse(id: number): Observable<Course> {
  //   return this.http.get<Course>(`${this.apiUrl}/${id}`);
  // }

  // createCourse(course: Course): Observable<Course> {
  //   return this.http.post<Course>(this.apiUrl, course);
  // }

  // updateCourse(id: number, course: Course): Observable<Course> {
  //   return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  // }


  createCourse(course: Course): Observable<any> {
    return this.http.post('http://localhost:8080/api/courses', course); // Replace with your API endpoint
  }

  updateCourse(id: number, course: Course): Observable<any> {
    return this.http.put(`/api/courses/${id}`, course); // Replace with your API endpoint
  }


  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
