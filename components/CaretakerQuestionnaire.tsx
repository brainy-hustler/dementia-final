"use client";
import { useState } from "react";
import { Box, Typography, Button, Grid, Container, } from "@mui/material"
import { careTakerQuestions } from "@/caretakerQuestions";
import QuestionnaireScreen from "./QuestionnaireScreen";
import { useRouter } from "next/navigation";

export default function CaretakerQuestionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [answerMap, setAnswerMap] = useState<Map<string,string>>(new Map());
  const router = useRouter();

  function handleOptionSelect(event:React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
  }

  function handleNextClick() {
    if(selectedOption === ""){
      setShowAlert(true);
    } else {
      setShowAlert(false);
      const newAnsMap = new Map(answerMap);
      newAnsMap.set(careTakerQuestions[currentQuestion].question,selectedOption);
      setAnswerMap(newAnsMap);
      setCurrentQuestion(currentQuestion+1);
      setSelectedOption("");
      if (currentQuestion === careTakerQuestions.length-1) {
        setShowResults(true);
        setCurrentQuestion(0);
      }
    }
  }

  function skipQuizClick() {
    router.push("/home");
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
              Tell us about Patient
          </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <Typography component="div" variant="h5">
                You have completed the Questionnaire!!
              </Typography>
              <Box sx={{pt: 3, pb: 3}}>
                    <Button variant="contained" href="/" >Back to Home</Button>
              </Box>
            </Box>
            
          </Grid>
          </Grid>
        </Container>
      ) : (
        <Box>
          <QuestionnaireScreen type="ctq" questions={careTakerQuestions} currentQuestion={currentQuestion} selectedOption={selectedOption} handleSubmitClick={() => {}} handleNextClick={handleNextClick} handleOptionSelect={handleOptionSelect} skipQuizClick={skipQuizClick} quizTitle="Tell us about Patient" showAlert={showAlert} showAnswer={false} showTick={false}/>
        </Box>
      )}
    </>
  );
}