export class Course {
  id: number;
  teacherId:number;
  name: string;
  price: string;
  startDate: Date;
  duration: number;
  description: string;
  image: string;

  constructor() {
      this.id = 0;
      this.teacherId = 0;
      this.name = '';
      this.price = '';
      this.startDate = new Date();
      this.duration = 0;
      this.description = '';
      this.image = '';
  }

}


