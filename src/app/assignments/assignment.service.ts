import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assignment } from './assignment.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private apiUrl = 'http://localhost:8080/api/assignments';

  constructor(private http: HttpClient) {}

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => {
          const assignment = new Assignment();
          assignment.id = item.id;
          assignment.courseId = item.course.id;
          assignment.topic = item.topic;
          assignment.dueDate = item.dueDate;

          return assignment;
        })
      )
    );
  }

  getAssignmentById(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.apiUrl}/${id}`);
  }

  getAssignmentByCourseId(courseId: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.apiUrl}?courseId=${courseId}`);
  }

  createAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.apiUrl, assignment, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateAssignment(id: number, assignment: Assignment): Observable<Assignment> {
    return this.http.put<Assignment>(`${this.apiUrl}/${id}`, assignment, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteAssignment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
