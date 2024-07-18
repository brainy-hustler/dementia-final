"use client";

import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Box, Button, Container, Grid, TextField, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

interface Symptom {
  date: string;
  description: string;
}

const SymptomTracker: React.FC = () => {
  const [symptom, setSymptom] = useState<string>('');
  const [symptoms, setSymptoms] = useState<Symptom[]>([
    { date: '2024-07-01', description: 'Headache' },
    { date: '2024-07-01', description: 'Nausea' },
    { date: '2024-07-02', description: 'Dizziness' },
    { date: '2024-07-03', description: 'Fatigue' },
    { date: '2024-07-03', description: 'Confusion' },
    { date: '2024-07-04', description: 'Memory Loss' },
  ]);

  useEffect(() => {
    const storedSymptoms = localStorage.getItem('symptoms');
    if (storedSymptoms) {
      setSymptoms(JSON.parse(storedSymptoms));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('symptoms', JSON.stringify(symptoms));
  }, [symptoms]);

  const handleSymptomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymptom(event.target.value);
  };

  const handleAddSymptom = () => {
    if (symptom.trim() === '') return;
    const today = dayjs().format('YYYY-MM-DD');
    const newSymptom: Symptom = { date: today, description: symptom };
    setSymptoms([...symptoms, newSymptom]);
    setSymptom('');
  };

  const getDataForChart = () => {
    const symptomCounts: { [date: string]: number } = {};
    symptoms.forEach(({ date }) => {
      symptomCounts[date] = (symptomCounts[date] || 0) + 1;
    });

    const sortedDates = Object.keys(symptomCounts).sort();
    return sortedDates.map((date) => ({ date: dayjs(date).format('YYYY-MM-DD'), count: symptomCounts[date] }));
  };

  const dataset = getDataForChart();

  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Symptom Tracker
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Enter Symptom"
              variant="outlined"
              fullWidth
              value={symptom}
              onChange={handleSymptomChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleAddSymptom}>
              Add Symptom
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Logged Symptoms
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
              <List>
                {symptoms.map((symptom, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={symptom.description}
                      secondary={`Logged on: ${symptom.date}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Symptom Frequency Over Time
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
              <LineChart
                dataset={dataset}
                series={[{ dataKey: 'count', label: 'Symptoms per Day' }]}
                xAxis={[{ dataKey: 'date', scaleType: 'time' }]}
                height={300}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SymptomTracker;
