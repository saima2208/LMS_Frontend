export class Feedback {
  id: number;
 studentId:number;
 studentName:string;
  content:string;
  rating: number;
  stars:string;
  image: string;
   courseName: string;
  createdAt: Date; // Use `Date` for TypeScript as it represents dates and times

  constructor()
   {
    this.id = 0;
    this.studentId=0;
    this.studentName = '';
    this.content = '';
    this.rating=0;
    this.stars = '';
    this.image='';
    this.courseName ='';
    this.createdAt = new Date();
  }

    getStars(): string {
    return this.rating
      ? '★'.repeat(Math.min(this.rating, 5)) + '☆'.repeat(5 - this.rating)
      : 'No rating';
  }
}
