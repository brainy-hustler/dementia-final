"use client";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import VideosScreen from './VideosScreen';
import { careTakerVideos, patientVideos } from '@/staticVideos';
import { useState } from 'react';
import PatientQuestionnaire from './PatientQuestionnaire';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function VideoTabs() {
  const [value, setValue] = useState(0);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [videoNum, setVideoNum] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setShowQuestionnaire(false);
  };

  function onTakeQuizClick(videoNum : number) {
    setShowQuestionnaire(true);
    setVideoNum(videoNum);
  }

  function skipQuizClick(){
    setShowQuestionnaire(false);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Caretaker" {...a11yProps(0)} />
          <Tab label="Patient" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <VideosScreen videos={careTakerVideos} tabNum={1} onTakeQuizClick={()=>{}}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
         {!showQuestionnaire && <VideosScreen videos={patientVideos} tabNum={2} onTakeQuizClick={onTakeQuizClick}/>}
         {showQuestionnaire && <PatientQuestionnaire questions={patientVideos[videoNum].questions} quizTitle={patientVideos[videoNum].title} skipQuizClick={skipQuizClick}/>}
      </CustomTabPanel>
    </Box>
  );
}