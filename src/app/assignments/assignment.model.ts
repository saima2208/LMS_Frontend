export class Assignment {
  id: number;
  courseId: number;
  topic: string;
  dueDate: Date;


  constructor() {
      this.id =0;
      this.courseId = 0;
      this.topic = '';
      this.dueDate =new Date();

  }
}

