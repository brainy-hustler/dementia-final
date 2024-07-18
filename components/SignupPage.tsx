import React from 'react'
import { Grid, Card, Avatar, Typography, TextField, Button, Divider } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Swal from 'sweetalert2';
const Signup = () => {
    const cardStyle = { padding: 20, width: 300, margin: "auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    function sleep(ms: number | undefined) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      function showAlert() {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Information saved Successfully!",
          showConfirmButton: false,
          timer: 10000
        });
      }
    return (
        <Grid sx={{mt:2}}>
            <Card style={cardStyle}>
                <Grid>
                    <Avatar style={avatarStyle}>
                        <AppRegistrationIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField size="small" fullWidth label='Name' placeholder="Enter your name" autoFocus />
                    <Divider sx={{mt:2}}/>
                    <TextField size="small" fullWidth label='Email' placeholder="Enter your email" autoFocus autoComplete="email"/>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField size="small" fullWidth label='Phone Number' placeholder="Enter your phone number" autoFocus/>
                    <Divider sx={{mt:2}}/>
                    <TextField size="small" fullWidth label='Patient Phone Number' placeholder="Enter patient phone number" autoFocus />
                    <Divider sx={{mt:2}}/>
                    <TextField size="small" fullWidth label='Password' placeholder="Enter your password" autoFocus/>
                    <Divider sx={{mt:2}}/>
                    <TextField size="small" fullWidth label='Confirm Password' placeholder="Confirm your password" autoFocus/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary' onClick={showAlert}>Sign up</Button>
                </form>
            </Card>
        </Grid>
    )
}

export default Signup;