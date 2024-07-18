"use client";
import { useEffect, useState } from "react";
import { Box, Typography, Button, Stack, Container, Grid, } from "@mui/material"
import { QuestionnaireData } from "@/patientQuestions";
import QuestionnaireScreen from "./QuestionnaireScreen";

interface PatientQuestionnaireProps {
  questions: QuestionnaireData[],
  quizTitle: string,
  skipQuizClick: () => void
}

export default function PatientQuestionnaire({questions, quizTitle, skipQuizClick} : PatientQuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showTick, setShowTick] = useState(false);

  const [score, setScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  
  function handleOptionSelect(event:React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
  }

  function handleSubmitClick() {
    if(selectedOption === ""){
      setShowAlert(true);
      setShowAnswer(false);
    } else {
      setShowAlert(false);
      setShowAnswer(true);
      if(selectedOption === questions[currentQuestion].answer) {
          setScore(score+1);  
          setCorrectAnswersCount(correctAnswersCount+1);
          setShowTick(true);
      }
      else { 
          setWrongAnswersCount(wrongAnswersCount+1);
          setShowTick(false);
      }
    }
  }

  function handleNextClick() {
    setShowAlert(false);
    setShowAnswer(false);
    setShowTick(false);
    setCurrentQuestion(currentQuestion+1);
    setSelectedOption("");
    if (currentQuestion === questions.length-1) {
      setShowResults(true);
      setCurrentQuestion(0);
    }
    console.log(localStorage.getItem('questionnaireData'));
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setShowAlert(false);
    setShowAnswer(false);
    setShowTick(false);
    setSelectedOption("");
    setScore(0);  
    setCorrectAnswersCount(0);
    setWrongAnswersCount(0);
    setShowResults(false);
  }

  return (
    <>
      {showResults ? (
        <Container>
          <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={12} md={12}>
          <Typography component="div" variant="h5" color="secondary" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt:3,
                    mb: 3
          }}>
              {quizTitle} 
          </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            
          <Box sx={{
            pl: 10,
          }}>
            <Typography component="h5" variant="h6" fontSize={'3vh'} color="primary" sx={{pb:2}}>
              Your Score
            </Typography>
            <Typography component="div" variant="h4" sx={{pb:2}}>
              Overall {score == 0 ? 0 : (score * 100 / (questions.length)).toFixed(1)}%
            </Typography>
            <Typography component="p" sx={{pb:1}}>
              Total Questions: <span>{questions.length}</span>
            </Typography>
            <Typography component="p" sx={{pb:1}}>
              Total Score: <span>{score}</span>
            </Typography>
            <Typography component="p" sx={{pb:1}}>
              Correct Answers: <span>{correctAnswersCount}</span>
            </Typography>
            <Typography component="p" sx={{pb:1}}>
              Wrong Answers: <span>{wrongAnswersCount}</span>
            </Typography>
            <Box sx={{mt:2, pb: 3}}>
                <Stack direction="row" spacing={3}>
                    <Button variant="contained" onClick={() => restartQuiz()} >Start the Quiz Again</Button>
                    <Button variant="outlined" onClick={() => skipQuizClick()} >Back to Videos</Button>
                </Stack>
            </Box>
          </Box>
          
          </Grid>
          </Grid>
        </Container>
      ) : (
        <Box>
          <QuestionnaireScreen type="ptq" questions={questions} currentQuestion={currentQuestion} selectedOption={selectedOption} handleSubmitClick={handleSubmitClick} handleNextClick={handleNextClick} handleOptionSelect={handleOptionSelect} skipQuizClick={skipQuizClick} quizTitle={quizTitle} showAlert={showAlert} showAnswer={showAnswer} showTick={showTick}/>
        </Box>
      )}
    </>
  );
}