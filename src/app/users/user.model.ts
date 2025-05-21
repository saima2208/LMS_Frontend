
export enum Role {
  Admin = 'ADMIN',
  Teacher = 'TEACHER',
  Student = 'STUDENT',
}

export class User {
  id: number;
  name: string;
  fatherName: string;
  motherName: string;
  address: string;
  phone: string;
  email: string;
  avatarUrl:string;
  password: string;
  role:Role;
  // avatarUrl?: string; // URL of the uploaded image
  // avatarFile?: File; // File object for uploading


  constructor() {
      this.id = 0;
      this.name = "";
      this.fatherName = "";
      this.motherName = "";
      this.address = "";
      this.phone = "";
      this.email = "";
      this.avatarUrl = "";
      this.password = "";
      this.role= Role.Admin;
  }

}

export interface GetUserInfo{
  id: number;
  name: string;
  fatherName: string;
  motherName: string;
  address: string;
  phone: string;
  email: string;
  avatarUrl:string;
  password: string;
  role:Role;
}
