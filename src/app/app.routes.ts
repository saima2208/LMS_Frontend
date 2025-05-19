import { UserListComponent } from './users/user-list/user-list.component';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admins/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admins/admin/admin.component';
import { AddAdminComponent } from './admins/add-admin/add-admin.component';
import { StudentDashboardComponent } from './students/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teachers/teacher-dashboard/teacher-dashboard.component';
import { StudentComponent } from './students/student/student.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './courses/course/course.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { AddLessonComponent } from './lessons/add-lesson/add-lesson.component';
import { LessonListComponent } from './lessons/lesson-list/lesson-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

import { authGuard } from './core/auths.guard';
import { DetailsComponent } from './courses/details/details.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { EnrollmentComponent } from './enrollments/enrollment/enrollment.component';
import { EnrollmentListComponent } from './enrollments/enrollment-list/enrollment-list.component';
import { PendingEnrollmentComponent } from './enrollments/pending-enrollment/pending-enrollment.component';
import { AssignmentListComponent } from './assignments/assignment-list/assignment-list.component';
import { AssignmentAddComponent } from './assignments/assignment-add/assignment-add.component';
import { AddRecordClassComponent } from './classes/add-record-class/add-record-class.component';
import { RecordClassComponent } from './classes/record-class/record-class.component';
import { FeedbackComponent } from './feedbacks/feedback/feedback.component';
import { FeedbackFormComponent } from './feedbacks/feedback-form/feedback-form.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ProfileComponent } from './profiles/profile/profile.component';
import { ChangePasswordComponent } from './profiles/change-password/change-password.component';
import { EditComponent } from './profiles/edit/edit.component';
import { FaqComponent } from './pages/faq/faq.component';




export const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard], },
  { path: 'home', component: HomeComponent },
  { path: 'adminProfile', component: AdminComponent },
  { path: 'add-admin', component: AddAdminComponent },
  { path: 'student', component: StudentDashboardComponent },
  { path: 'teacher', component: TeacherDashboardComponent },
  { path: 'studentProfile', component: StudentComponent },
  { path: 'teacherProfile', component: TeacherComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'add-lesson', component: AddLessonComponent },
  { path: 'lesson-list', component: LessonListComponent },
  { path: 'enroll', component: EnrollmentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'course-details', component: DetailsComponent },
  { path: 'teacher-list', component: TeacherListComponent },
  { path: 'termsCondition', component: TermsAndConditionComponent },
  { path: 'enroll-list', component: EnrollmentListComponent },
  { path: 'pending-enroll', component: PendingEnrollmentComponent },
  { path: 'assignment-list', component: AssignmentListComponent },
  { path: 'add-assignment', component: AssignmentAddComponent },
  { path: 'add-recordClass', component: AddRecordClassComponent },
  { path: 'recordClasses', component: RecordClassComponent },
  { path: 'add-feedback', component: FeedbackFormComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  {path:'profile',component:ProfileComponent},
  {path:'changePassword', component:ChangePasswordComponent},
  {path:'edit',component:EditComponent},
  {path:'faq',component:FaqComponent}


];


