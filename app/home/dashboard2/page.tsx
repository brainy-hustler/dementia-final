"use client";

import React from "react";
import { Box, Grid, Paper, Typography, Container } from "@mui/material";
import { Line, Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard: React.FC = () => {
  const dailyActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Completed Tasks",
        data: [5, 6, 7, 4, 8, 6, 7],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  const cognitiveFunctionData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Cognitive Scores",
        data: [70, 75, 80, 85],
        backgroundColor: "rgba(153,102,255,0.6)",
      },
    ],
  };

  const moodData = {
    labels: ["Happy", "Neutral", "Sad"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
      },
    ],
  };

  const symptomTrackingData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Symptom Severity",
        data: [20, 30, 25, 35],
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
      },
    ],
  };

  const caregiverInteractionsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Interactions",
        data: [2, 3, 1, 4, 2, 3, 4],
        backgroundColor: "rgba(54,162,235,0.6)",
      },
    ],
  };

  const medicationAdherenceData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Adherence",
        data: [90, 85, 88, 92],
        borderColor: "rgba(255,206,86,1)",
        backgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Daily Activity Tracking</Typography>
              <Line data={dailyActivityData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Cognitive Function Scores</Typography>
              <Bar data={cognitiveFunctionData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Mood and Behavior Logs</Typography>
              <Pie data={moodData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Symptom Tracking</Typography>
              <Line data={symptomTrackingData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Caregiver Interactions</Typography>
              <Bar data={caregiverInteractionsData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Medication Adherence</Typography>
              <Line data={medicationAdherenceData} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
