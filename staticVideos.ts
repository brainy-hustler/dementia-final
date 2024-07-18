"use client";

import { QuestionnaireData, video1Questions, video2Questions, video3Questions } from "./patientQuestions";

export interface VideoData { 
    url: string,
    title: string,
    subtitle: string
    questions: QuestionnaireData[]
}

export const patientVideos : VideoData[] = [
  {
      url: "https://www.youtube.com/embed/_r9pWWYjBFw?si=YVnAmyPwhhcNQwtq",
      title: "Baby Racoon",
      subtitle: "Listening Comprehension is all about passively listening to the natural flow of sound. Once you hear a change in the flow, you switch to active listening. This will greatly improve your listening comprehension skills as you become used to it.",
      questions: video1Questions
  },
  {
      url: "https://www.youtube.com/embed/U4zivrfY0LE?si=lTJaFu6MfwwiNYxe",
      title: "Lava Stone",
      subtitle: "Listening Comprehension is all about passively listening to the natural flow of sound. Once you hear a change in the flow, you switch to active listening. This will greatly improve your listening comprehension skills as you become used to it.",
      questions: video2Questions
  },
  {
      url: "https://www.youtube.com/embed/SYc6WhlfJ1g?si=ZnANqKQ6aU9AqlnR",
      title: "Meditation",
      subtitle: "Listening Comprehension is all about passively listening to the natural flow of sound. Once you hear a change in the flow, you switch to active listening. This will greatly improve your listening comprehension skills as you become used to it.",
      questions: video3Questions
  },
]

export const careTakerVideos : VideoData[] = [
    {
        url: "https://www.youtube.com/embed/hahvUXwTXE4?si=C7DXgdLOeg4-OsRC",
        title: "How to deal with agitated patient?",
        subtitle: "This video provides viewers with practical tools you can use in a variety of settings to create a safe, comfortable environment both for the person with dementia and the caregiver.",
        questions: []
    },
    {
        url: "https://www.youtube.com/embed/hgVMKEnkvHo?si=U5WC1iQ7tRa0AlcZ",
        title: "Positive approches to deal with patient",
        subtitle: "Caring for Veterans with dementia can be both rewarding and challenging.The VA has developed this training program to help you adopt a more positive approach to address Veterans with dementia.",
        questions: []
    },
    {
        url: "https://www.youtube.com/embed/TCjGDhukFb0?si=CFCUePtHX-gn1iQu",
        title: "Dementia Caregiving Verbal or Physical Outbursts",
        subtitle: "The information in this video offers family caregivers practical advice to help them respond to new challenges while maintaining a meaningful and healthy relationship with a loved one living with dementia.",
        questions: []
    },
  ]