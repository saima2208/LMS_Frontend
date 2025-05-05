export class Course {
  course_id: number;
  teacher_id:number;
  name: string;
  price: string;
  startDate: String;
  duration: number;
  description: string;
  image: string;

  constructor() {
      this.course_id = 0;
      this.teacher_id = 0;
      this.name = '';
      this.price = '';
      this.startDate = '';
      this.duration = 0;
      this.description = '';
      this.image = '';
  }

}


