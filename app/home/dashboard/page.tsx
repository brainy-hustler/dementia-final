"use client";

import React from "react";
import { Box, Grid, Paper, Typography, Container } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";

const Dashboard: React.FC = () => {
  const dailyActivityData = {
    xAxis: [
      {
        id: "days",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        scaleType: "band" as const,
      },
    ],
    series: [{ data: [5, 6, 7, 4, 8, 6, 7], label: "Completed Tasks", color : "#b490f8"}],
  };

  const cognitiveFunctionData = {
    xAxis: [
      {
        id: "weeks",
        data: ["Week 1", "Week 2", "Week 3", "Week 4"],
        scaleType: "band" as const,
      },
    ],
    series: [{ data: [70, 75, 80, 85], label: "Cognitive Scores" }],
  };

  const moodData = {
    series: [
      {
        data: [
          { id: "Happy", value: 55, label: "Happy" },
          { id: "Neutral", value: 30, label: "Neutral" },
          { id: "Sad", value: 15, label: "Sad" },
        ],
        label: "Mood Distribution",
      },
    ],
  };

  const symptomTrackingData = {
    xAxis: [
      {
        id: "weeks",
        data: ["Week 1", "Week 2", "Week 3", "Week 4"],
        scaleType: "band" as const,
      },
    ],
    series: [{ data: [20, 30, 25, 35], label: "Symptom Severity", color: "#FFCE56"}],
  };

  const caregiverInteractionsData = {
    xAxis: [
      {
        id: "days",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        scaleType: "band" as const,
      },
    ],
    series: [{ data: [2, 3, 1, 4, 2, 3, 4], label: "Interactions", color: "#5cbcf4" }],
  };

  const medicationAdherenceData = {
    xAxis: [
      {
        id: "weeks",
        data: ["Week 1", "Week 2", "Week 3", "Week 4"],
        scaleType: "band" as const,
      },
    ],
    series: [{ data: [90, 85, 88, 92], label: "Adherence", color : "#FF6384" }],
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
              <LineChart
                series={dailyActivityData.series}
                xAxis={dailyActivityData.xAxis}
                height={300}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Cognitive Function Scores</Typography>
              <BarChart
                series={cognitiveFunctionData.series}
                xAxis={cognitiveFunctionData.xAxis}
                height={300}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Mood and Behavior Logs</Typography>
              <PieChart series={moodData.series} height={300} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Symptom Tracking</Typography>
              <LineChart
                series={symptomTrackingData.series}
                xAxis={symptomTrackingData.xAxis}
                height={300}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Caregiver Interactions</Typography>
              <BarChart
                series={caregiverInteractionsData.series}
                xAxis={caregiverInteractionsData.xAxis}
                height={300}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Medication Adherence</Typography>
              <LineChart
                series={medicationAdherenceData.series}
                xAxis={medicationAdherenceData.xAxis}
                height={300}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
