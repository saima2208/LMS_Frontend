import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  userRole = '';
  isAuthenticated = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userRole = this.auth.getUserRole();
    this.isAuthenticated = this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
  }
}
