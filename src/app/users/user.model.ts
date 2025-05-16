
// export interface User {
//   id: number;
//   name: string;
//   fatherName: string;
//   motherName: string;
//   email: string;
//   password: string;
//   phone: string;
//    gender:string;
//   nationality:string;
//   avatarUrl?: string;
//   role: 'Admin' | 'Teacher' | 'Student';
// }
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
  gender:string;
  nationality:string;
  avatarUrl:string;
  password: string;
  role:Role;


  constructor() {
      this.id = 0;
      this.name = "";
      this.fatherName = "";
      this.motherName = "";
      this.address = "";
      this.phone = "";
      this.email = "";
      this.gender = "";
      this.nationality = "";
      this.avatarUrl = "";

      this.password = "";
      this.role= Role.Admin;

  }

}
