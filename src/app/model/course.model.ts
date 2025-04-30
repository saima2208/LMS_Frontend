export class Course {
  course_id: number;
  teacher_id:number;
  total_lesson:number;
  name: string;
  description: string;
  price:string;
  startDate: String;
  duration: number;
  image: string;

  constructor(course_id: number,teacher_id:number,total_lesson:number, name: string, description: string,price:string, startDate: String, duration: number,image:string) {
      this.course_id = course_id;
      this.teacher_id = teacher_id;
      this.name = name;
      this.total_lesson = total_lesson;
      this.description = description;
      this.startDate = startDate;
      this.price = price;
      this.duration = duration;
      this.image = image;
  }

}


