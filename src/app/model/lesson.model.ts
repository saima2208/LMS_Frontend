export class Lesson {
  lesson_id: number;
  course_id: number;
  title: string;
  content: string;
  video_url: string;

  constructor(lesson_id: number,course_id: number, title: string, content: string, video_url:string) {
      this.lesson_id = lesson_id;
      this.course_id = course_id;
      this.title = title;
      this.content = content;
      this.video_url = video_url;
  }
}

