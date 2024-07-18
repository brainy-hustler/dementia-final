"use client";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { cityData } from '@/cityData';
import { useState } from 'react';
import { PeopleData, peopleData } from '@/peopleData';
import { Avatar, AvatarGroup, Container, FormControl, Grid, InputLabel, Link, List, ListItem, MenuItem, Paper, Select, SelectChangeEvent, Typography } from '@mui/material';
import {
  CallRounded,
  LocationCityRounded,
  Instagram,
  EventAvailableSharp,
  Male,
  Female,
  Transgender,
} from "@mui/icons-material";
import { events } from '@/staticEvents';


export default function NetworkingScreen() {
  const cityList = [];
  const [selectedOption, setSelectedOption] = useState<string | null>("");
  const peopleMap = new Map<string,PeopleData[]>();
  const [selectedPeople, setSelectedPeople] = useState<PeopleData[]>([]);
  const [type, setType] = useState("");

   
  for(let i=0; i<cityData.length; i++){
    for(let j=0; j<cityData[i].cities.length; j++){
      cityList.push(cityData[i].cities[j]);
    }
  }

  for(let i=0; i<peopleData.length; i++){
    if(peopleMap.get(peopleData[i].city) == null){
      let peopleList = [];
      peopleList.push(peopleData[i]);
      peopleMap.set(peopleData[i].city,peopleList);
       
    } else {
      let peopleList = peopleMap.get(peopleData[i].city);
      if(peopleList != undefined){
          peopleList.push(peopleData[i]);
          peopleMap.set(peopleData[i].city,peopleList);
      }
    }
  }

  function handleTypeChange (event: SelectChangeEvent)  {
    setType(event.target.value as string);
    let selectedList = (selectedOption == null? [] : peopleMap.get(selectedOption));
    let peopleList = [];
    for(let i=0; selectedList!= undefined && i<selectedList.length; i++){
      if(selectedList[i].type === event.target.value){
        peopleList.push(selectedList[i]);
      }
    }
    setSelectedPeople(peopleList);
  };

  function getPeopleData(option : string | null){
      setSelectedOption(option);
      setSelectedPeople([]);
      setType("");
      if(option != null){
        let peopleList = peopleMap.get(option);
        if(peopleList != undefined){
          setSelectedPeople(peopleList);
        }
      }

  }



  return (
    <Container>
      <Grid container spacing={3} direction="row">
        <Grid item xs={12} sm={11} md={11}>
            <Typography component="div" variant="h5" color="secondary" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 3,
                    
            }}>
                    Connect with People
            </Typography>
        </Grid>
        <Grid item xs={12} sm={1} md={1}>
          <Box sx={{mt: 2, mr: 6,  display: "flex", flexDirection: "column", alignItems: "left",}}>
          <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="/p1.jpg" />
            <Avatar alt="Travis Howard" src="/p2.jpg" />
            <Avatar alt="Agnes Walker" src="/p3.jpg" />
            <Avatar alt="Trevor Henderson" src="/p4.jpg" />
          </AvatarGroup>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <Box sx={{p:6,}}>
          <Grid container columnSpacing={3} direction="row" rowSpacing={3}>
          <Grid item  xs={12} sm={4} md={4}>
            <Paper elevation={3} sx={{height:'100%'}}>
                <Box sx={{p: 2 ,}}>
                  <EventAvailableSharp />
                  <Typography component="span" variant="h5" color='secondary' sx={{fontSize: 16, pl: 1}}>
                      Find events around you
                  </Typography>
                </Box>
                <Box>
                  {events.length !=0 && (
                      <List sx={{
                          position: 'relative',
                          overflow: 'auto',
                          height: 310,
                          bgcolor: 'background.paper',
                        }}
                        subheader={<li />}
                      >
                      {events.map((event, index) => (
                          <ListItem key={index} alignItems="flex-start">   
                              <Link href={event.url} underline="always">
                                {event.title}
                            </Link>
                          </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              
            </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
                <Grid container direction="row" columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                <Grid item xs={12} sm={6} md={6}>
                   <Autocomplete
                      id="country-select-demo"
                      options={cityList}
                      autoHighlight
                      getOptionLabel={(option) => option}
                      onChange={(event: any, newValue: string | null) => {
                        getPeopleData(newValue);
                      }}
                      renderOption={(props, option) => {
                        const { key, ...optionProps } = props;
                        return (
                          <Box
                            key={key}
                            component="li"
                            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                            {...optionProps}
                          >
                            {option} 
                          </Box>
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a City"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                    />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" >Type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Type"
                        onChange={handleTypeChange}
                      >
                        <MenuItem value={"C"}>Caretaker</MenuItem>
                        <MenuItem value={"P"}>Patient</MenuItem>
                        
                      </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    {selectedOption !== "" && selectedPeople.length !=0  && (
                      <Paper elevation={3} >
                        <Box sx={{ pt: 1, pl: 1, mt: 2,}}>
                          <List sx={{
                              position: 'relative',
                              overflow: 'auto',
                              height: 300,
                              bgcolor: 'background.paper',
                            }}
                            subheader={<li />}
                          >
                          {selectedPeople.map((people, index) => (
                              <ListItem key={index} alignItems="flex-start">   
                                  <Box  >
                                      <Typography component="div" variant="h6" fontSize={'2.5vh'} sx={{pt: 1}}>
                                          {people.name} 
                                      </Typography>
                                      {people.profileType === "pub" && <Typography variant="body2" color="text.secondary" component="div" sx={{pt: 1.5}}>
                                          <CallRounded /> {people.contactNo}
                                      </Typography>}
                                      {people.profileType === "priv" && <Typography variant="body2" color="text.secondary" component="div"  sx={{pt: 1.5}} >
                                          <CallRounded /> XXXXXXXXXX
                                      </Typography>}
                                      <Typography variant="body2" color="text.secondary" component="div"  sx={{pt: 1}}>
                                          <Instagram /> {people.socialMediaName}
                                      </Typography>
                                      <Typography variant="body2" color="text.secondary" component="div"  sx={{pt: 1}}>
                                          <LocationCityRounded /> {people.city}
                                      </Typography>
                                      <Typography variant="body2" color="text.secondary" component="div"  sx={{pt: 1}}>
                                          {people.gender === "Male" && <Male />} 
                                          {people.gender === "Female" && <Female />} 
                                          {people.gender === "Other" && <Transgender />} 
                                          {people.gender}
                                      </Typography>
                                  </Box>
                              </ListItem>
                          ))}
                        </List>
                        </Box>
                      </Paper>
                    )}
                    {selectedOption !== "" && selectedPeople.length == 0 && (
                      <Paper elevation={3}>
                      <Box sx={{p:2, mt: 2}}>
                        <Typography component="div" variant="h5" fontSize="2.5vh">
                            No result found
                        </Typography>
                      </Box>
                      </Paper>
                    )}
                    
                
                </Grid>
                </Grid>
            </Grid>
            
          </Grid>
      </Box>
      </Grid>
      </Grid>
    </Container>
  );
}
