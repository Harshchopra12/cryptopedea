import type { Quiz } from "../types/quiz.types";

export const foundationModule1Quiz: Quiz = {
  moduleId: "foundation-module-1",

  title: "Foundation Quiz",

  description:
    "Test your understanding of the first foundation module.",

  passingScore: 80,

  xpReward: 100,

  questions: [
    {
      id: "q1",

      question:
        "What was one of the earliest forms of money?",

      options: [
        "Gold",
        "Cowrie Shells",
        "Paper Notes",
        "Bitcoin",
      ],

      correctAnswer: 1,

      explanation:
        "Cowrie shells were widely used as money in many ancient civilizations.",
    },

    {
      id: "q2",

      question:
        "Why did societies move away from barter?",

      options: [
        "Lack of trust",
        "Double coincidence of wants",
        "Government laws",
        "Technology",
      ],

      correctAnswer: 1,

      explanation:
        "Barter required both parties to want exactly what the other offered.",
    },

    {
      id: "q3",

      question:
        "Which characteristic makes gold a good store of value?",

      options: [
        "Durability",
        "Softness",
        "Transparency",
        "Elasticity",
      ],

      correctAnswer: 0,

      explanation:
        "Gold is durable and scarce, making it an excellent store of value.",
    },
  ],
};