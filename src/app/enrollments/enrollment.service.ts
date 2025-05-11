// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Enrollment } from '../enrollments/enrollment.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class EnrollmentService {
//   private apiUrl = 'http://localhost:8080/api/enrollments';

//   constructor(private http: HttpClient) {}

//   getAllEnrollments(): Observable<Enrollment[]> {
//     return this.http.get<Enrollment[]>(this.apiUrl);
//   }

//   getEnrollmentById(id: number): Observable<Enrollment> {
//     return this.http.get<Enrollment>(`${this.apiUrl}/${id}`);
//   }

//   createEnrollment(enrollment: Enrollment): Observable<Enrollment> {
//     return this.http.post<Enrollment>(this.apiUrl, enrollment);
//   }

//   updateEnrollment(id: number, enrollment: Enrollment): Observable<Enrollment> {
//     return this.http.put<Enrollment>(`${this.apiUrl}/${id}`, enrollment);
//   }

//   deleteEnrollment(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from '../enrollments/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:8080/api/enrollments';

  constructor(private http: HttpClient) {}

  getAllEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.apiUrl);
  }

  getEnrollmentById(id: number): Observable<Enrollment> {
    return this.http.get<Enrollment>(`${this.apiUrl}/${id}`);
  }

  createEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.post<Enrollment>(this.apiUrl, enrollment);
  }

  updateEnrollment(id: number, enrollment: Enrollment): Observable<Enrollment> {
    return this.http.put<Enrollment>(`${this.apiUrl}/${id}`, enrollment);
  }

  updateEnrollmentStatus(id: number, status: string): Observable<Enrollment> {
    return this.http.patch<Enrollment>(`${this.apiUrl}/${id}/status`, { status });
  }

  deleteEnrollment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
