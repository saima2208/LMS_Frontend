import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  imports: [],
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.css'
})
export class PendingComponent  implements OnInit {

 
    pendingEnrollments: Enrollment[] = [];
  
    ngOnInit(): void {
      this.loadPendingEnrollments();
    }
  
    loadPendingEnrollments(): void {
      const stored = localStorage.getItem('pendingEnrollments');
      this.pendingEnrollments = stored ? JSON.parse(stored) : [];
    }
  
    deleteEnrollment(index: number): void {
      this.pendingEnrollments.splice(index, 1);
      localStorage.setItem('pendingEnrollments', JSON.stringify(this.pendingEnrollments));
    }
  }
export class Enrollment{
  
}
