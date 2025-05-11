// import { Component, EventEmitter, Output } from '@angular/core';
// import { Enrollment } from '../enrollment.model';
// import { EnrollmentService } from '../enrollment.service';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-enrollment',
//   imports: [FormsModule],
//   templateUrl: './enrollment.component.html',
//   styleUrl: './enrollment.component.css'
// })
// export class EnrollmentComponent {

//   // this is object initialized  for the class
//     enrollments: Enrollment = new Enrollment();

//     isUpdate=false;




//     constructor(
//        private router:Router,
//        private enrollmentService: EnrollmentService)
//       {

//       const nav= this.router.getCurrentNavigation();

//       if(nav?.extras.state&&nav.extras.state['a']){

//         this.enrollments=nav.extras.state['a'];

//         this.isUpdate=true;
//       }
//       }


//       // getCourses() {
//       //   this.courseService.getCourseById(this.cor.id).subscribe({
//       //     next: (data) => {
//       //       this.cor = data;
//       //       console.log(this.cor);
//       //     },
//       //     error: (err) => console.error('Failed to load courses:', err),
//       //   });
//       // }


//          onSubmit() {
//               if (this.isUpdate) {
//                 // Update course logic
//                 this.enrollmentService.updateEnrollment(this.enrollments.id!, this.enrollments).subscribe({
//                   next: () => {
//                     this.router.navigate(['/enroll-list']);
//                   },
//                   error: (err) => {
//                     alert('Failed to update enrollments: ' + err.message);
//                     console.error(err);
//                   },
//                 });
//               } else {
//                 // Create course logic
//                 this.enrollmentService.createEnrollment(this.enrollments).subscribe({
//                   next: () => {
//                       alert('Form submit successfully ');
//                     this.router.navigate(['/pending-enroll']);

//                     this.enrollments = new Enrollment(); // Reset the form model
//                   },
//                   error: (err) => {
//                     alert('Failed to create Enrollment: ' + err.message);
//                     console.error(err);
//                   },
//                 });
//               }
//             }
// }


import { Component, EventEmitter, Output } from '@angular/core';
import { Enrollment } from '../enrollment.model';
import { EnrollmentService } from '../enrollment.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollment',
  imports: [FormsModule],
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {
  enrollments: Enrollment = new Enrollment();
  isUpdate = false;

  constructor(
    private router: Router,
    private enrollmentService: EnrollmentService
  ) {
    const nav = this.router.getCurrentNavigation();

    if (nav?.extras.state && nav.extras.state['a']) {
      this.enrollments = nav.extras.state['a'];
      this.isUpdate = true;
    }
  }

  // Handles form submission for both creating and updating enrollments
  onSubmit() {
    if (this.isUpdate) {
      // Update the existing enrollment
      this.enrollmentService.updateEnrollment(this.enrollments.id!, this.enrollments).subscribe({
        next: () => {
          alert('Enrollment updated successfully!');
          this.router.navigate(['/enroll-list']); // Navigate to the list view
        },
        error: (err) => {
          alert('Failed to update enrollment: ' + err.message);
          console.error(err);
        },
      });
    } else {
      // Create a new enrollment
      this.enrollmentService.createEnrollment(this.enrollments).subscribe({
        next: () => {
          alert('Enrollment created successfully!');
          this.router.navigate(['/pending-enroll']); // Navigate to pending enrollments
          this.resetForm(); // Reset the form model after success
        },
        error: (err) => {
          alert('Failed to create enrollment: ' + err.message);
          console.error(err);
        },
      });
    }
  }

  // Resets the form model and state
  resetForm() {
    this.enrollments = new Enrollment(); // Clear the form
    this.isUpdate = false; // Reset the update flag
  }
}
