export interface Lesson {
  id?: string;

  title: string;

  moduleId: string;

  order: number;

  duration: number;

  markdownFile: string;
}