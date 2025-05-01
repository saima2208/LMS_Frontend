export class Course {
  course_id: number;
  teacher_id:number;

  name: string;
  description: string;
  price:string;
  startDate: String;
  duration: number;
  image: string;

  constructor() {
      this.course_id = 0;
      this.teacher_id = 0;
      this.name = '';

      this.description = '';
      this.startDate = '';
      this.price = '';
      this.duration = 0;
      this.image = '';
  }

}


