// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../../users/user.service';
// import { User } from '../../users/user.model';
// import { CommonModule, NgIf } from '@angular/common';

// @Component({
//   selector: 'app-student-list',
//   imports: [CommonModule,NgIf],
//   templateUrl: './student-list.component.html',
//   styleUrl: './student-list.component.css'
// })
// export class StudentListComponent implements OnInit{

//    isUpdate = false;
//    students: User[] = [];

//    constructor(
//      private router: Router,

//      private userService: UserService
//    ) {

//    }

//    ngOnInit() {
//      this.getStudents();
//    }

//    getStudents() {
//      this.userService.getUserByRole('STUDENT').subscribe({

//        next: (data) => {
//          (this.students = data);

//          console.log(this.students)
//        },
//        error: (err) => console.error('Failed to load teachers:', err),
//      });
//    }

//      updateStudent(a: User) {
//     this.router.navigate(['/add-user'], { state: { a } });
//   }

//   deleteStudent(a: User): void {
//     if (a.id != null) {
//       if (confirm('are you want to delete?')) {
//         this.userService.deleteUser(a.id).subscribe(() => {
//           this.getStudents();
//         });
//       }
//     } else {
//       alert('Id is Invalid?');
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';
import { User } from '../../users/user.model';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, NgIf],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'] // Fixed typo here (styleUrl -> styleUrls)
})
export class StudentListComponent implements OnInit {

  isUpdate = false;
  students: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.userService.getUserByRole('STUDENT').subscribe({
      next: (data) => {
        // Assign data and sort by id in descending order
        this.students = data.sort((a, b) => b.id - a.id);
        console.log(this.students);
      },
      error: (err) => console.error('Failed to load students:', err),
    });
  }

  updateStudent(student: User) {
    this.router.navigate(['/add-user'], { state: { student } });
  }

  deleteStudent(student: User): void {
    if (student.id != null) {
      if (confirm('Are you sure you want to delete this student?')) {
        this.userService.deleteUser(student.id).subscribe(() => {
          this.getStudents();
        });
      }
    } else {
      alert('Invalid student ID!');
    }
  }
}
