import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../courses/course.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/api/course';

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
    return this.http.get<Course[]>(`${this.apiUrl},course`);
  }

}


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Course } from '../courses/course.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class CourseService {
//   private apiUrl = 'http://localhost:8080/api/courses';
//   private httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//   };

//   constructor(private http: HttpClient) {}

//   // Fetch all courses
//   getCourses(): Observable<Course[]> {
//     return this.http.get<any[]>(this.apiUrl).pipe(
//       map((data) =>
//         data.map((item) => this.mapToCourse(item)) // Reuse mapping logic
//       )
//     );
//   }

//   // Fetch a course by its ID
//   getCourseById(id: number): Observable<Course> {
//     return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
//       map((item) => this.mapToCourse(item))
//     );
//   }

//   // Create a new course
//   createCourse(course: Course): Observable<Course> {
//     return this.http.post<Course>(this.apiUrl, course, this.httpOptions);
//   }

//   // Update an existing course
//   updateCourse(id: number, course: Course): Observable<Course> {
//     return this.http.put<Course>(`${this.apiUrl}/${id}`, course, this.httpOptions);
//   }

//   // Delete a course by ID
//   deleteCourse(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }

//   // Private method to map API response to `Course` model
//   private mapToCourse(item: any): Course {
//     const course = new Course();
//     course.id = item.id;
//     course.teacherId = item.teacher?.id || null; // Safeguard against missing `teacher`
//     course.name = item.name;
//     course.price = item.price;
//     course.startDate = new Date(item.startDate); // Convert date string to `Date` object
//     course.duration = item.duration;
//     course.description = item.description;
//     course.image = item.image;
//     return course;
//   }
// }
