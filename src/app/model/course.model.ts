export class Course {
  course_id: number;
  teacher_id:number;
  total_lesson:number;
  name: string;
  description: string;
  shortDescription: string;
  price:string;
  startDate: String;
  duration: number;
  image: string;

  constructor(course_id: number,teacher_id:number,total_lesson:number, name: string, description: string,shortDescription: string,price:string, startDate: String, duration: number,image:string) {
      this.course_id = course_id;
      this.teacher_id = teacher_id;
      this.name = name;
      this.total_lesson = total_lesson;
      this.description = description;
      this.shortDescription = shortDescription;
      this.startDate = startDate;
      this.price = price;
      this.duration = duration;
      this.image = image;
  }

}


export class Writer {
  id: number;
  writerName: string;
  bookName: string;
  quantity: number;
  price: number;
  imageUrl: string;

constructor(id: number, writerName: string,  bookName: string, quantity: number, price: number, imageUrl: string
) {
  this.id = id;
  this.writerName = writerName;
  this.bookName = bookName;
  this.quantity = quantity;
  this.price = price;
  this.imageUrl = imageUrl;
}
}

export class Catagory {
  id: number;
  name: string;
  description: string;

  price: number;
  imageUrl: string;
  constructor(id: number, name: string, description: string, quantity: number, price: number, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;

    this.price = price;
    this.imageUrl = imageUrl;
  }
}

