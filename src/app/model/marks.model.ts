export class Marks {
  id: number;
  courseId: number;
  assignmentId: number;
  studentId: number;
  studentName: string;
  marks: number;
  totalMarks:number;

  constructor() {
    this.id = 0;
    this.courseId = 0;
    this.assignmentId = 0;
    this.studentId = 0;
    this.studentName = '';
    this.marks = 0;
    this.totalMarks =0;
  }
}

export interface MarksDTO {

  studentId: number;
  assignmentId: number;
  marks: number;
}


