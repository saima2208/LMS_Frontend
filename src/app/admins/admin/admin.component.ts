import { Component, OnInit } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { User } from '../../model/user.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [AdminDashboardComponent, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void {
    let allUser = JSON.parse(localStorage.getItem('users') || '[]');
    this.users = allUser;
  }
}
