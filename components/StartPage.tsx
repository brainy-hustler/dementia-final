"use client";
import { Button, IconButton, Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Login from "@/components/Login";
import Signup from "@/components/SignupPage";

const StartPage = () => {
  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);

  const handleLogin=() => {
    setLogin(true);
    setRegister(false);
  };
  
  const handleSignup=() => {
    setRegister(true);
    setLogin(false);
  };
      
      return (
    <Box sx={{ flexGrow: 1,height:'100vh', backgroundImage:'url(patient.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
   
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"#"}>Dementia Defenders</Link>
          </Typography>
          <Button  variant="contained" color="primary" onClick={handleLogin}>
            SignIn
          </Button>
          <Button variant="contained" color="primary" sx={{ m : 2}} onClick={handleSignup}>
            Register
          </Button>
          
        </Toolbar>
      </AppBar>
      {login && (<Login/>)}
      {register && (<Signup/>)}

    </Box>
  );

}

export default StartPage
