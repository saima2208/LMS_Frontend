export enum EnrollmentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'APPROVED',
  CANCELLED = 'REJECTED'
}


export class Enrollment {
  id: number;
  courseName: String;
  name: String;
  email:String;
  phone: String;
  confirmMobile:String;
  enrollmentDate: Date;
  paymentMethod: String;
 status: EnrollmentStatus;

  constructor() {
    this.id = 0;
    this.courseName = '';
    this.name = '';
    this.email = '';
    this.phone = '';
     this.confirmMobile = '';
    this.enrollmentDate = new Date();
    this.paymentMethod = '';
   this.status = EnrollmentStatus.PENDING;  // Default status set to PENDING
  }

}
