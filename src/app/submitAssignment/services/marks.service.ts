import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marks } from '../marks-form/marks-form.component';

@Injectable({
  providedIn: 'root'
})
export class MarksService {
updateMark(id: number, mark: Marks):Observable<Marks> {
return this.http.put<Marks>(`${this.apiUrl}/${id}`,mark);
}
private apiUrl = 'http://localhost:8080/api/marks';

constructor(private http:HttpClient){}

addMarks(marks:Marks):Observable<Marks>{
  return this.http.post<Marks>(this.apiUrl,marks);
}



}
