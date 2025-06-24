// import { Component, OnInit } from '@angular/core';
// import { MarksService } from '../services/marks.service';
// import { Router } from '@angular/router';
// import { UserService } from '../../users/user.service';
// import { AssignmentService } from '../../assignments/assignment.service';
// import { CourseService } from '../../courses/course.service';
// import { Observable } from 'rxjs';
// import { User } from '../../users/user.model';
// import { Course } from '../../courses/course.model';
// import { Assignment } from '../../assignments/assignment.model';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Marks, MarksDTO } from '../../model/marks.model';

// @Component({
//   selector: 'app-marks-form',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './marks-form.component.html',
//   styleUrl: './marks-form.component.css',
// })
// export class MarksFormComponent implements OnInit {
//   mark: Marks = new Marks();
//   marks:Marks[] = [];
//   userId?: number;
//   students: User[] = [];
//   courses: Course[] = [];
//   assignments: Assignment[] = [];
//   studentMarks: { [studentId: number]: number } = {};
//   isUpdate = false;

//   courseId?: number;

//   constructor(
//     private router: Router,
//     private marksService: MarksService,
//     private userService: UserService,
//     private courseService: CourseService,
//     private assignmentService: AssignmentService
//   ) {}

//   ngOnInit(): void {
//     this.userId = Number(localStorage.getItem('id'));
//     if (this.userId) {
//       this.fetchMyCourse(this.userId);
//     } else {
//       console.error('User ID is missing in localStorage');
//     }
//     // this.getAssignments();

//   }

//   fetchMyCourse(userId: number): void {
//     this.courseService.getCoursesByTeacher(userId).subscribe({
//       next: (data) => {
//         this.courses = data;
//         if (this.courses.length > 0) {
//           this.courseId = this.courses[0].id; // Default to the first course
//           this.getStudents(); // Fetch students for the selected course
//           this.getAssignments(this.courseId);
//         } else {
//           console.warn('No courses found for this teacher.');
//         }
//       },
//       error: (err) => {
//         console.error('Failed to load courses by teacher:', err);
//       },
//     });
//   }

//   getStudents(): void {
//     if (!this.courseId) {
//       console.warn('No course selected to fetch students.');
//       return;
//     }
//     this.courseService.getUsersByCourseId(this.courseId).subscribe({
//       next: (data) => {
//         this.students = data;
//       },
//       error: (err) => {
//         console.error('Failed to load students for the course:', err);
//       },
//     });
//   }

//   getAssignments(courseId:number): void {
//      if (!this.courseId) {
//       console.warn('No course selected to fetch assignments.');
//       return;
//     }
//     this.assignmentService.getAssignmentByCourseId(courseId).subscribe({
//       next: (data) => {
//         this.assignments = data;
//       },
//       error: (err) => {
//         console.error('Failed to load assignments:', err);
//       },
//     });
//   }

//   // onSubmit(): void {
//   //   if (this.isUpdate) {
//   //     this.marksService.updateMark(this.mark.id, this.mark).subscribe({
//   //       next: () => {
//   //         this.router.navigate(['/mark-list']);
//   //       },
//   //       error: (err) => {
//   //         alert('Failed to update mark: ' + err.message);
//   //         console.error(err);
//   //       },
//   //     });
//   //   } else {
//   //     this.marksService.addMarks(this.marks).subscribe({
//   //       next: () => {
//   //         this.router.navigate(['/mark-list']);
//   //       },
//   //       error: (err) => {
//   //         alert('Failed to add mark: ' + err.message);
//   //         console.error(err);
//   //       },
//   //     });
//   //   }
//   // }

//    onSubmit(): void {
//     // Prepare the data to send to the backend
//     const marksDTOList: MarksDTO[] = this.students.map((student) => ({
//       studentId: student.id,
//       assignmentId: 1, // Replace with actual assignment ID
//       marks: this.studentMarks[student.id] || 0,
//     }));

//     this.marksService.addAllMarks(marksDTOList).subscribe({
//       next: () => {
//         alert('Marks submitted successfully!');
//         this.router.navigate(['/marks-list']);
//       },
//       error: (err) => {
//         alert('Failed to submit marks: ' + err.message);
//         console.error(err);
//       },
//     });
//   }
// }



import { Component, OnInit } from '@angular/core';
import { MarksService } from '../services/marks.service';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';
import { AssignmentService } from '../../assignments/assignment.service';
import { CourseService } from '../../courses/course.service';
import { User } from '../../users/user.model';
import { Course } from '../../courses/course.model';
import { Assignment } from '../../assignments/assignment.model';
import { Marks, MarksDTO } from '../../model/marks.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marks-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './marks-form.component.html',
  styleUrls: ['./marks-form.component.css'],
})
export class MarksFormComponent implements OnInit {
  userId?: number;
  mark: Marks = new Marks();
  students: User[] = [];
  courses: Course[] = [];
  assignments: Assignment[] = [];
  studentMarks: { [studentId: number]: number } = {};
  courseId?: number;
  selectedAssignmentId?: number;

   isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private marksService: MarksService,
    private courseService: CourseService,
    private assignmentService: AssignmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('id'));
    if (this.userId) {
      this.fetchMyCourses(this.userId);
    } else {
      console.error('User ID is missing in localStorage');
    }
  }

  fetchMyCourses(userId: number): void {
    this.courseService.getCoursesByTeacher(userId).subscribe({
      next: (data) => {
        this.courses = data;
        if (this.courses.length > 0) {
          this.courseId = this.courses[0].id;
          this.getStudents();
          this.getAssignments(this.courseId);
        } else {
          console.warn('No courses found for this teacher.');
        }
      },
      error: (err) => console.error('Failed to load courses:', err),
    });
  }

  getStudents(): void {
    if (this.courseId) {
      this.courseService.getUsersByCourseId(this.courseId).subscribe({
        next: (data) => (this.students = data),
        error: (err) => console.error('Failed to load students:', err),
      });
    }
  }

  getAssignments(courseId: number): void {
    this.assignmentService.getAssignmentByCourseId(courseId).subscribe({
      next: (data) => (this.assignments = data),
      error: (err) => console.error('Failed to load assignments:', err),
    });
  }

  // onSubmit(): void {
  //   if (!this.selectedAssignmentId) {
  //     alert('Please select an assignment before submitting.');
  //     return;
  //   }

  //   const marksDTOList: MarksDTO[] = this.students.map((student) => ({
  //     studentId: student.id,
  //     assignmentId: this.selectedAssignmentId!,
  //     marks: this.studentMarks[student.id] || 0,
  //   }));

  //   this.marksService.addAllMarks(marksDTOList).subscribe({
  //     next: () => {
  //       alert('Marks submitted successfully!');
  //       this.router.navigate(['/marks-list']);
  //     },
  //     error: (err) => {
  //       alert('Failed to submit marks: ' + err.message);
  //       console.error(err);
  //     },
  //   });
  // }

  onSubmit(): void {
    if (!this.selectedAssignmentId) {
      alert('Please select an assignment before submitting.');
      return;
    }

    const marksDTOList: MarksDTO[] = this.students.map((student) => {
      const marks = this.studentMarks[student.id] || 0;
      if (marks > (this.mark.totalMarks || 0)) {
        alert(`Marks for student ${student.name} exceed total marks.`);
        throw new Error(`Invalid marks for student ${student.name}`);
      }
      return {
        studentId: student.id,
        assignmentId: this.selectedAssignmentId!,
        marks: marks,
      };
    });

    this.isLoading = true;
    this.marksService.addAllMarks(marksDTOList).subscribe({
      next: () => {
        alert('Marks submitted successfully!');
        this.router.navigate(['/marks-list']);
        this.isLoading = false;
      },
      error: (err) => {
        alert('Failed to submit marks.');
        console.error(err);
        this.isLoading = false;
      },
    });
  }
}
