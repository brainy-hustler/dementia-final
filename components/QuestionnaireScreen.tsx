"use client";
import { QuestionnaireData } from "@/patientQuestions";
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl,  Button, Stack, Container, Grid} from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

interface QuestionnaireScreenProps {
    type: string
    questions: QuestionnaireData[],
    currentQuestion: number,
    selectedOption: string,
    handleSubmitClick: () => void
    handleNextClick: () => void
    handleOptionSelect: (event:React.ChangeEvent<HTMLInputElement>)=> void,
    skipQuizClick: ()=> void,
    quizTitle: string,
    showAlert: boolean,
    showAnswer: boolean,
    showTick: boolean
}

export default function QuestionnaireScreen({type, questions, currentQuestion, selectedOption, handleSubmitClick, handleNextClick, handleOptionSelect, skipQuizClick, quizTitle, showAlert, showAnswer, showTick}: QuestionnaireScreenProps){

    return (
      <Container>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={12} md={12}>
          <Typography component="div" variant="h5" color="secondary" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 3,
                    mb: 3
                  }}>
              {quizTitle} 
          </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          
          <Box sx={{
            pl: 10 
          }}>
            {showAlert && <Typography component="span" variant="body2" color="red">
              Please select an option
            </Typography>}
            <Typography component="h5" variant="h6" fontSize={'3vh'} color="primary" sx={{mt: 2, mb: 1}}>
              {questions[currentQuestion].id}. {questions[currentQuestion].question}
            </Typography>
            <Box>
                <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      value={selectedOption}
                      onChange={handleOptionSelect}
                    >
                        {questions[currentQuestion].options.map((option, index) => (
                          <Box key={index}>
                             <FormControlLabel value={option} control={<Radio />} label={option} />
                             {(showAnswer ? ((option === questions[currentQuestion].answer)? <CheckCircleOutlineIcon color="success"/>:<CancelOutlinedIcon color="error"/>) : <></>)}
                          </Box>
                        ))}
                    </RadioGroup>
               </FormControl>
            </Box>
          
            <Box sx={{pt: 2, pb: 3}}>
              <Typography component="p" sx={{pb: 3}}>
                {currentQuestion + 1} out of {questions.length}
              </Typography>
              <Stack direction="row" spacing={3}>
                  {type === "ptq" && <Button variant="contained" onClick={() => handleSubmitClick()} disabled={showAnswer} >Submit</Button>}
                  <Button variant="contained" onClick={() => handleNextClick()} disabled={type === "ptq" && !showAnswer}>Next</Button>
                  <Button variant="outlined" onClick={() => skipQuizClick()}>Skip Quiz</Button>
              </Stack>
            </Box>
          </Box>
         
          </Grid>
        </Grid>
      </Container>
    );
}