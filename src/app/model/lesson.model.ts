export class Lesson {
  lesson_id: number;
  course_id: number;
  topic: string;
  content: string;
  video_url: string;

  constructor() {
      this.lesson_id =0;
      this.course_id = 0;
      this.topic = '';
      this.content ='';
      this.video_url = '';
  }
}

