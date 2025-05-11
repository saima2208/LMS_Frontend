
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
  Admin = 'Admin',
  Teacher = 'Teacher',
  Student = 'Student',
}

export class User {
  id: number;
  name: string;
  fatherName: string;
  motherName: string;
  address: string;
  phoneNo: string;
  email: string;
  gender:string;
  nationality:string;
  image:string;
  password: string;
  role:Role;


  constructor() {
      this.id = 0;
      this.name = "";
      this.fatherName = "";
      this.motherName = "";
      this.address = "";
      this.phoneNo = "";
      this.email = "";
      this.gender = "";
      this.nationality = "";
      this.image = "";

      this.password = "";
      this.role= Role.Admin;

  }

}
