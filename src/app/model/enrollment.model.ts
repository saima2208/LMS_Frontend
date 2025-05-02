export class Enrollment {
  courseId: number;
  studentId: number;
  enrolledDate: string;
  paymentMethod: string;
  status: string;

  constructor(){
    this.courseId=0;
    this.studentId=0;
    this.enrolledDate='';
    this.paymentMethod='';
    this.status='';
  }
}
