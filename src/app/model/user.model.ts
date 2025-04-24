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
  // role:Role;


  constructor(id: number, name: string, fatherName: string, motherName: string, address: string, phoneNo: string, email: string,gender:string, nationality:string,image:string, password: string, ) {
      this.id = id;
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
