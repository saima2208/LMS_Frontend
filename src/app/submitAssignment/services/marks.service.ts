// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Marks } from '../../model/marks.model';


// @Injectable({
//   providedIn: 'root'
// })
// export class MarksService {
// updateMark(id: number, mark: Marks):Observable<Marks> {
// return this.http.put<Marks>(`${this.apiUrl}/${id}`,mark);
// }
// private apiUrl = 'http://localhost:8080/api/marks';

// constructor(private http:HttpClient){}

// addMarks(marks:Marks):Observable<Marks[]>{
//   return this.http.post<Marks[]>(`${this.apiUrl}/all`,marks);
// }

// getAllMarks(): Observable<Marks[]>{
// return this.http.get<Marks[]>(`${this.apiUrl}`);
// }


// }


import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Marks, MarksDTO } from '../../model/marks.model';


@Injectable({
  providedIn: 'root'
})
export class MarksService {
  private apiUrl = 'http://localhost:8080/api/marks';

  constructor(private http: HttpClient) {}

  // Add multiple marks
  // addMarks(marks: Marks[]): Observable<Marks[]> {
  //   const headers = { 'Content-Type': 'application/json' };
  //   return this.http.post<Marks[]>(`${this.apiUrl}/all `, marks, { headers }).pipe(
  //     // catchError(this.handleError)
  //   );
  // }

  addMarks(marksDTO: MarksDTO): Observable<Marks> {
    return this.http.post<Marks>(`${this.apiUrl}`, marksDTO);
  }

  // Add multiple marks
  addAllMarks(marksDTOList: MarksDTO[]): Observable<Marks[]> {
    return this.http.post<Marks[]>(`${this.apiUrl}/all`, marksDTOList);
  }

  // Get all marks
  getAllMarks(): Observable<Marks[]> {
    return this.http.get<Marks[]>(this.apiUrl).pipe(
      // catchError(this.handleError)
    );
  }

  // Update a single mark by ID
  updateMark(id: number, mark: Marks): Observable<Marks> {
    return this.http.put<Marks>(`${this.apiUrl}/${id}`, mark).pipe(
      // catchError(this.handleError)
    );
  }

   getMarksByAssignmentAndUser(assignmentId: number, userId: number): Observable<Marks[]> {
    return this.http.get<Marks[]>(`${this.apiUrl}/${assignmentId}/${userId}`);
  }

  // Error handler
  // private handleError(error: HttpErrorResponse) {
  //   console.error('Error occurred:', error.message);
  //   return throwError(() => new Error('Something went wrong. Please try again later.'));
  // }
}

