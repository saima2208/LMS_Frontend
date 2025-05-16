export class Lesson {
  id: number;
  courseId: number;
  topic: string;
  content: string;
  video_url: string;

  constructor() {
      this.id =0;
      this.courseId = 0;
      this.topic = '';
      this.content ='';
      this.video_url = '';
  }
}

