import { Component, OnInit } from '@angular/core';
import { Marks } from '../../model/marks.model';
import { Router } from '@angular/router';
import { MarksService } from '../services/marks.service';
import { Observable } from 'rxjs';
import { AssignmentService } from '../../assignments/assignment.service';
import { UserService } from '../../users/user.service';
import { CourseService } from '../../courses/course.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Course } from '../../courses/course.model';

@Component({
  selector: 'app-marks-list',
  imports: [CommonModule,NgIf],
  templateUrl: './marks-list.component.html',
  styleUrl: './marks-list.component.css'
})
export class MarksListComponent implements OnInit{
//   marks: Marks[] = [];
//   userId?: number;
//   assignmentId?: number;
//   courseId?:number;

//   constructor(private router: Router,
//     private marksService: MarksService,
//     private userService: UserService,
//     private assignmentService: AssignmentService,
//     private courseService: CourseService
//   ) { }
//   ngOnInit(): void {
//  this.userId = Number(localStorage.getItem('id'));
//     if (this.userId) {
//       this.getMarks(this.userId);
//     } else {
//       console.error('User ID is missing in localStorage');
//     }


//     this.getCourse();
//     this.getAssignment();
//   }
//   getAssignment() {
//   }
//   getCourse() {

//   }

//   getMarks(assignmentId:number,userId: number) {
//    this.marksService.getMarksByAssignmentAndUser(assignmentId, userId).subscribe((data) => {
//     this.marks = data;
//    });
//   }

// }


 marks: Marks[] = [];
  userId?: number;
  assignmentId?: number;
  courseId?: number;
  isLoading = false;
  errorMessage = '';
  courses:Course[] = [];

  constructor(
    private router: Router,
    private marksService: MarksService,
    private userService: UserService,
    private assignmentService: AssignmentService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const storedUserId = localStorage.getItem('id');
    this.userId = storedUserId ? Number(storedUserId) : undefined;

    if (this.userId && !isNaN(this.userId)) {

    } else {
      console.error('User ID is missing or invalid in localStorage');
      this.errorMessage = 'User ID is missing. Please log in again.';
    }
  }

  getAssignments(courseId?: number): void {
    if (courseId) {
      this.assignmentService.getAssignmentByCourseId(courseId).subscribe(
        (assignments) => {
          console.log('Fetched assignments:', assignments);
          // Assuming you need the first assignment for fetching marks
          if (assignments.length > 0) {
            this.assignmentId = assignments[0].id;
            this.fetchMarks(); // Fetch marks after getting assignments
          }
        },
        (error) => {
          console.error('Error fetching assignments:', error);
          this.errorMessage = 'Error fetching assignments. Please try again later.';
        }
      );
    } else {
      console.warn('Course ID is missing. Cannot fetch assignments.');
    }
  }

    fetchMyCourses(userId: number): void {
    this.userService.getCoursesByUserId(userId).subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Failed to load courses:', err);
        // Display an error message in the UI
      }
    });
  }

  //  getCourses(): void {
  //   this.isLoading = true;
  //   this.userService.getCoursesByUserId(userId).subscribe(
  //     (courses) => {
  //       console.log('Fetched courses:', courses);
  //       this.isLoading = false;
  //       if (courses.length > 0) {
  //         this.courseId = courses[0].id;
  //         this.getAssignments(this.courseId); // Fetch assignments after getting courses
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching courses:', error);
  //       this.errorMessage = 'Error fetching courses. Please try again later.';
  //       this.isLoading = false;
  //     }
  //   );
  // }


   fetchMarks(): void {
    if (this.userId && this.assignmentId) {
      this.isLoading = true;
      this.marksService.getMarksByAssignmentAndUser(this.assignmentId, this.userId).subscribe(
        (data) => {
          this.marks = data;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching marks:', error);
          this.errorMessage = 'Error fetching marks. Please try again later.';
          this.isLoading = false;
        }
      );
    } else {
      console.warn('Assignment ID or User ID is missing. Cannot fetch marks.');
    }
  }


}
