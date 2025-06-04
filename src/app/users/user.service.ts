import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { User } from './user.model';
import { Course } from '../courses/course.model';


@Injectable({
  providedIn: 'root',
})
export class UserService {


  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }



  getCoursesByUserId(userId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/${userId}/courses`);
  }



  // Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getCurrentUser(): Observable<any> {
    const userId = Number(localStorage.getItem('id'));
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  // Create a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Update a user
  fetchUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  updateProfile(id: number, user: User): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }


  //   updateUserByEmail(email: string, userData: any): Observable<any> {
  //   return this.http.put('/api/users', { email, ...userData });
  // }


  // Delete a user
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getUserByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/role`, {
      params: { role }
    });
  }



}
