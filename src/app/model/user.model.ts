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


  constructor(user_id: number, name: string, fatherName: string, motherName: string, address: string, phoneNo: string, email: string,gender:string, nationality:string,image:string, password: string, ) {
      this.user_id = user_id;
      this.name = name;
      this.fatherName = fatherName;
      this.motherName = motherName;
      this.address = address;
      this.phoneNo = phoneNo;
      this.email = email;
      this.gender = gender;
      this.nationality = nationality;
      this.image = image;

      this.password = password;

  }
}

export interface User {
  userId: number;
  name: string;
  fatherName: string;
  motherName: string;
  email: string;
  password: string;
  phone: string;
  avatarUrl?: string;
  role: 'Admin' | 'Teacher' | 'Student';
}

