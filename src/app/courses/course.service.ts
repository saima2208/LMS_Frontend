import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../courses/course.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/api/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => {
          const course = new Course();

          course.id = item.id;
          course.teacherId = item.teacher.id;
          course.courseName = item.courseName;
          course.price = item.price;
          course.startDate = item.startDate;
          course.duration = item.duration;
          course.description = item.description;
          course.image = item.image;
          return course;
        })
      )
    );
  }

 getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  getCoursesByTeacher(teacherId:number): Observable<Course[]> {
    return this.http.get<Course[]> (`${this.apiUrl}/teacher/${teacherId}`);
  }


  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}`);
  }

    getCoursesByName(courseName: string): Observable<any> {
    const url = `${this.apiUrl}/search-by-name`;
    const body = { courseName }; // Request body

    return this.http.post(url, body);
  }

  getCurrentCourse(): Observable<any> {
    const courseId = Number(localStorage.getItem('id'));
    return this.http.get<any>(`${this.apiUrl}/${courseId}`);
  }

}


