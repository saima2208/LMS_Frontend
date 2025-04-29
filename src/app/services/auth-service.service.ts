// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { LoginRequest, LoginResponse } from '../model/login.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthServiceService {

//   private apiUrl = 'http://localhost:8080/api/auth/login'; // Replace with your backend URL

//   constructor(private http: HttpClient) {}

//   // Login user
//   login(credentials: LoginRequest): Observable<LoginResponse> {
//     return this.http.post<LoginResponse>(this.apiUrl, credentials);
//   }

//   // Save token in local storage
//   saveToken(token: string): void {
//     localStorage.setItem('authToken', token);
//   }

//   // Get token from local storage
//   getToken(): string | null {
//     return localStorage.getItem('authToken');
//   }

//   // Remove token (Logout)
//   logout(): void {
//     localStorage.removeItem('authToken');
//   }
// }
