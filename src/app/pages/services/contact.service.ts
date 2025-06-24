import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  addContact(contact:Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl,contact,{
      headers: new HttpHeaders({ 'Content-Type':'application/json'}),
    });
  }

  getAllMessages(): Observable<Contact[]>{
return this.http.get<Contact[]>(`${this.apiUrl}`);
  }

}
