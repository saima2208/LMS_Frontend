export class Feedback {
  id: number;
  content: string;
  publishAt: Date; // Use `Date` for TypeScript as it represents dates and times

  constructor(id: number, content: string, publishAt: Date) {
    this.id = id;
    this.content = content;
    this.publishAt = publishAt;
  }
}
