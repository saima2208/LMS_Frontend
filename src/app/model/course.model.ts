export class Course {
  id: number;
  teacher_id:number;
  total_lesson:number;
  name: string;
  description: string;
  startDate: String;
  instructor: string;
  duration: number;
  image: string;

  constructor(id: number,teacher_id:number,total_lesson:number, name: string, description: string, startDate: String, instructor: string, duration: number,image:string) {
      this.id = id;
      this.teacher_id = teacher_id;
      this.name = name;
      this.total_lesson = total_lesson;
      this.description = description;
      this.startDate = startDate;
      this.instructor = instructor;
      this.duration = duration;
      this.image = image;
  }

}
