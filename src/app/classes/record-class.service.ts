import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecordClass } from './recordClass.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordClassService {

   private apiUrl = 'http://localhost:8080/api/recordsClass';

  constructor(private http: HttpClient) {}

  getRecordClassses(): Observable<RecordClass[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => {
          const recordClass = new RecordClass();
          recordClass.id = item.id;
          recordClass.courseId = item.course.id;


          recordClass.videoUrl = ''; // Add video URL if your API includes it
          return recordClass;
        })
      )
    );
  }

  getRecordClassById(id: number): Observable<RecordClass> {
    return this.http.get<RecordClass>(`${this.apiUrl}/${id}`);
  }

  getRecordClassByCourseId(courseId: number): Observable<RecordClass[]> {
    return this.http.get<RecordClass[]>(`${this.apiUrl}?courseId=${courseId}`);
  }

  createRecordClass(recordClass: RecordClass): Observable<RecordClass> {
    return this.http.post<RecordClass>(this.apiUrl, recordClass, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateRecordClass(id: number, lesson: RecordClass): Observable<RecordClass> {
    return this.http.put<RecordClass>(`${this.apiUrl}/${id}`, lesson, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteRecordClass(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
