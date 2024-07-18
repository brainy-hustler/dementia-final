"use client";

export interface QuestionnaireData { 
  id: number,
  question: string,
  options: string[],
  answer: string
}

export const careTakerQuestions: QuestionnaireData[] = [
  {
    id: 1,
    question: "How often has the patient forgotten things/recent activities?",
    options: ["No event","Seldom","Often","Very often"],
    answer: "",
  },
  {
    id: 2,
    question: "How often has the patient lost or misplaced things?",
    options: ["No event","Seldom","Often","Very often"],
    answer: ""
  },
  {
    id: 3,
    question: "How often did he get lost while walking or driving?",
    options: ["No event","Seldom","Often","Very often"],
    answer: ""
  },
  {
    id: 4,
    question: "How often did he get confused even in familiar places?",
    options: ["No event","Seldom","Often","Very often"],
    answer: ""
  },
  {
    id: 5,
    question: "Did he loose track of time?",
    options: ["No event","Seldom","Often","Very often"],
    answer: ""
  },
  {
    id: 6,
    question: "Did he face difficutly in solving problems of making decision?",
    options: ["No event","Seldom","Often","Very often"],
    answer: ""
  },
  {
    id: 7,
    question: "Did he face difficulty in performing similar task?",
    options: ["No event","Seldom","Often","Very often"],
    answer: ""
  },
  {
    id: 8,
    question: "How often does he/she feels anxious,sad or angry about memory loss?",
    options: ["No event","Seldom","Often","Very often"],
    answer: ""
  },
  {
    id: 9,
    question: "Have you noticed a change in Personality?",
    options: ["No event","Seldom","Often","Very often"],
    answer: ""
  },
  {
    id: 10,
    question: "Has the patient done any inappropriate behaviour?",
    options: ["No event","Seldom","Often","Very often"],
    answer: ""
  },
]