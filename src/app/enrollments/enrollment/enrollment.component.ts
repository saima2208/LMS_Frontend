// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { Enrollment } from '../enrollment.model';
// import { EnrollmentService } from '../enrollment.service';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CommonModule, NgIf } from '@angular/common';
// import { AuthService } from '../../core/auth.service';
// import { GetUserInfo, User } from '../../users/user.model';
// import { UserService } from '../../users/user.service';

// @Component({
//   selector: 'app-enrollment',
//   imports:[FormsModule,CommonModule],
//   templateUrl: './enrollment.component.html',
//   styleUrls: ['./enrollment.component.css'],
// })
// export class EnrollmentComponent implements OnInit {
//   enrollments: Enrollment = new Enrollment();
//   isUpdate = false;
//   isAuthenticated = false;
//   // student: User = new User();

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private enrollmentService: EnrollmentService,
//     private userService: UserService,
//     private auth: AuthService
//   ) { }

//   ngOnInit(): void {
//     this.route.queryParamMap.subscribe((params) => {
//       const courseTitle = params.get('title');
//       if (courseTitle) {
//         this.enrollments.courseName = courseTitle;
//       }
//       const studentName = params.get('name');
//       if(studentName) {
//         this.enrollments.name = studentName;
//       }
//     });

//     const nav = this.router.getCurrentNavigation();
//     if (nav?.extras.state && nav.extras.state['a']) {
//       this.enrollments = nav.extras.state['a'];
//       this.isUpdate = true;
//     }


//     this.isAuthenticated = this.auth.isAuthenticated();


//     //  this.getStudents();
//   }


//   //   getStudents() {
//   //   this.userService.getUserByRole('STUDENT').subscribe({
//   //     next: (data) => {
//   //       (this.student = data);
//   //       console.log(this.student)
//   //     },
//   //     error: (err) => console.error('Failed to load students:', err),
//   //   });
//   // }


//   onSubmit() {

//       this.enrollmentService.createEnrollment(this.enrollments).subscribe({

//         next: () => {
//            if (!this.enrollments.email  || !this.enrollments.name || !this.enrollments.phone) {
//         alert('Fullfill the requirements.');
//         return;
//       }

//           alert(' successfully submit the form.We will confirm you within 24 hours.');
//           // this.router.navigate(['/pending-enroll']);
//           this.resetForm();
//         },
//         error: (err) => {
//           alert('Failed to submit the form,try again: ' + err.message);
//           console.error(err);
//         },

//       });
//     }



//   resetForm() {
//     this.enrollments = new Enrollment();
//     this.isUpdate = false;

//   }


// }

import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../enrollment.model';
import { EnrollmentService } from '../enrollment.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';
import { UserService } from '../../users/user.service';
import { User } from '../../users/user.model';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css'],
})
export class EnrollmentComponent implements OnInit {
  enrollments: Enrollment = new Enrollment();
   isAuthenticated = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enrollmentService: EnrollmentService,
    private userService: UserService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    // Fetch course title from query parameters
    this.route.queryParamMap.subscribe((params) => {
      const courseTitle = params.get('title');
      if (courseTitle) {
        this.enrollments.courseName = courseTitle;
      }
    });

    // Check for navigation state for updates
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['a']) {
      this.enrollments = nav.extras.state['a'];
    }

    // Check authentication status
    this.isAuthenticated = this.auth.isAuthenticated();

    // Populate user information if authenticated
    if (!this.isAuthenticated) {
      this.userService.getCurrentUser().subscribe({
        next: (user: User) => {
          this.enrollments.name = user.name;
          this.enrollments.email = user.email;
          this.enrollments.phone = user.phone;
        },
        error: (err) => console.error('Failed to fetch logged-in user information:', err),
      });
    }
  }

  onSubmit(): void {
    if (!this.enrollments.email || !this.enrollments.name || !this.enrollments.phone) {
      alert('Please complete all required fields.');
      return;
    }

    this.enrollmentService.createEnrollment(this.enrollments).subscribe({
      next: () => {
        alert('Successfully submitted the form. We will confirm within 24 hours.');
        this.resetForm();
      },
      error: (err) => {
        alert('Failed to submit the form. Please try again: ' + err.message);
        console.error(err);
      },
    });
  }

  resetForm(): void {
    this.enrollments = new Enrollment();
  }
}

