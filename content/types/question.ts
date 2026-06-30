export interface QuestionSeed {
  id: string;

  quizId: string;

  order: number;

  question: string;

  options: string[];

  correctAnswer: number;

  explanation: string;
}