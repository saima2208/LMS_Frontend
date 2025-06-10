import { Course } from "../courses/course.model";

export enum Role {
  Admin = 'ADMIN',
  Teacher = 'TEACHER',
  Student = 'STUDENT',
}

export class User {
  id: number;
  name: string;
  bio:string;
  fatherName: string;
  motherName: string;
  address: string;
  phone: string;
  email: string;
  avatarUrl:string;
  password: string;
  role:Role;
courseName: String;
  // avatarUrl?: string; // URL of the uploaded image
  // avatarFile?: File; // File object for uploading


  constructor() {
      this.id = 0;
      this.name = "";
      this.bio = "";
      this.fatherName = "";
      this.motherName = "";
      this.address = "";
      this.phone = "";
      this.email = "";
      this.avatarUrl = "";
      this.password = "";
      this.role= Role.Admin;
      this.courseName= "";
  }

}

export interface GetUserInfo{
  id: number;
  name: string;
  bio:string;
  fatherName: string;
  motherName: string;
  address: string;
  phone: string;
  email: string;
  avatarUrl:string;
  password: string;
  role:Role;
}
