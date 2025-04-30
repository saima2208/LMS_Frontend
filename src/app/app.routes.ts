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



export const routes: Routes = [
  {path:'admin',component:AdminDashboardComponent},
  {path: '',component:AdminDashboardComponent},
  {path:'adminProfile',component:AdminComponent},
  {path:'add-admin',component:AddAdminComponent},
  {path:'student',component:StudentDashboardComponent},
  {path:'teacher',component:TeacherDashboardComponent},
  {path:'studentProfile',component:StudentComponent},
  {path:'teacherProfile',component:TeacherComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'courses',component:CourseComponent},
  {path:'add-course',component:AddCourseComponent},
  {path: 'login', component: LoginComponent },
  {path:'course-list',component:CourseListComponent}


];


