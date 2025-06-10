export class Course {
  id: number;
  teacherId: number;
  courseName: string;
  price: string;
  startDate: Date;
  duration: number;
  description: string;
  image: string;

  constructor() {
    this.id = 0;
    this.teacherId = 0;
    this.courseName = '';
    this.price = '';
    this.startDate = new Date();
    this.duration = 0;
    this.description = '';
    this.image = '';
  }

}

export class CourseDetails {
  teacherName: string;
  teacherImage: string;
  courseName: string;
  price: string;
  startDate: Date;
  duration: number;
  description: string;
  CourseImage: string;
  bio:string;
  topic:string;
  content:string

  constructor() {
    this.teacherName= '';
    this.teacherImage = '';
    this.courseName = '';
    this.price = '';
    this.startDate = new Date();
    this.duration = 0;
    this.description = '';
    this.CourseImage = '';
    this.bio = '';
    this.topic = '';
    this.content = '';

  }
}


