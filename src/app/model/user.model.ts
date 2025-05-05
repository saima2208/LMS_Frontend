export class User {
  user_id: number;
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
   // role:Role;


  constructor() {
      this.user_id = 0;
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

  }
}

// export interface User {
//   userId: number;
//   name: string;
//   fatherName: string;
//   motherName: string;
//   email: string;
//   password: string;
//   phone: string;
//   avatarUrl?: string;
//   role: 'Admin' | 'Teacher' | 'Student';
// }

