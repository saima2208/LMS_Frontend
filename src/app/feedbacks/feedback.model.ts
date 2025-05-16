export class Feedback {
  id: number;
  studentId:number;
  content:string;
  rating: number;
  image: string;
  stars?: string;
  createdAt: Date; // Use `Date` for TypeScript as it represents dates and times

  constructor()
   {
    this.id = 0;
    this.studentId = 0;
    this.content = '';
    this.rating=0;
    this.stars = '';
    this.image='';
    this.createdAt = new Date();
  }

    getStars(): string {
    return this.rating
      ? '★'.repeat(Math.min(this.rating, 5)) + '☆'.repeat(5 - this.rating)
      : 'No rating';
  }
}
