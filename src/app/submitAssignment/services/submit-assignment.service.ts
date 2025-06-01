import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitAssignmentService {

 private baseUrl = 'http://localhost:8080/api/submitAssignments';

  constructor(private http: HttpClient) {}

  // Upload assignment file with studentId and assignmentId
  submitAssignment(studentId: number, assignmentId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('studentId', studentId.toString());
    formData.append('assignmentId', assignmentId.toString());
    formData.append('file', file);

    return this.http.post(this.baseUrl, formData, { responseType: 'text' });
  }

  // Download submitted assignment file by submission ID
  downloadSubmittedAssignment(submissionId: number): Observable<Blob> {
    const url = `${this.baseUrl}/${submissionId}/submit`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
