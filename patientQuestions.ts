"use client";

export interface QuestionnaireData { 
  id: number,
  question: string,
  options: string[],
  answer: string
}

export const video1Questions: QuestionnaireData[] = [
  {
    id: 1,
    question: "How many babies does a mother racoon usually have?",
    options: [
      "2",
      "3",
      "4",
      "5",
    ],
    answer: "4"
  },
  {
    id: 2,
    question: "What is true of baby racoons?",
    options: ["They are dangerous", "They live with their mom", "They can't stand when they are born", "They are big"],
    answer: "They can't stand when they are born"
  },
  {
    id: 3,
    question: "Why do racoons move den?",
    options: [
      "For the safety from other animals",
      "They like moving to a new den",
      "In search of food",
      "There is no reason for it",
    ],
    answer: "For the safety from other animals"
  },
]

export const video2Questions: QuestionnaireData[] = [
  {
    id: 1,
    question: "What flowed into the water?",
    options: [
      "Pumice",
      "Water",
      "Glass",
      "Lava",
    ],
    answer: "Lava"
  },
  {
    id: 2,
    question: "What was in Kala's Pocket?",
    options: ["Lava", "Pumice", "Glass", "Banana"],
    answer: "Glass"
  },
  {
    id: 3,
    question: "How is the black glass formed?",
    options: [
      "When Lava cools slowly",
      "When Lava cools really fast",
      "When there are gases trapped inside",
      "When the lava flows into the water",
    ],
    answer: "When Lava cools really fast"
  },
]

export const video3Questions: QuestionnaireData[] = [
  {
    id: 1,
    question: "What can meditation do?",
    options: [
      "Change your past",
      "Energize your body",
      "Lower stress",
      "Improve hearing",
    ],
    answer: "Lower stress"
  },
  {
    id: 2,
    question: "How do you meditate?",
    options: ["Sit comfortably", "Breathe quickly", "Think of other things", "Talk to other"],
    answer: "Sit comfortably"
  },
  {
    id: 3,
    question: "How long people been meditating?",
    options: [
      "10s of years",
      "100s of years",
      "1000s of years",
      "1000000s of years",
    ],
    answer: "1000s of years"
  },
]