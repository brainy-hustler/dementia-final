
"use client";
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert,
} from '@mui/material';
import { GridCheckIcon } from '@mui/x-data-grid';
import Swal from 'sweetalert2';
import { setTimeout } from 'timers';

const ProfileScreen = () => {

 

  const [profile, setProfile] = useState({
    email : 'John.Doe@gmail.com',
    fullName: 'John Doe',
    dateOfBirth: '1990-07-05',
    gender: 'male',
    address: '1 Mockingbird Lane London SW1A 1AA United Kingdom',
    emergencyContactName: 'Jane Doe',
    emergencyContactRelationship : 'Wife',
    emergencyContactPhone : '987-654-3210',
    diagnosis: 'Alzheimer\'s Disease, diagnosed in June 2024',
    medicalHistory: 'Hypertension, Diabetes',
    medications: 'Lisinopril 10mg daily, Metformin 500mg twice daily',
    allergies: 'Penicillin',
    insuranceProvider : 'Medi Assit Pvt Ltd',
    policyNumber :'PN59782351',
    dailyLivingSkills : 'Dressing: Needs assistance, Bathing: Needs assistance, Eating: Independent',
    assistiveDevices :'Walker',
    behavioralConcerns :'Agitation Triggers: Loud noises',
    emotionalState : 'Mood: Generally calm, Coping Mechanisms: Listening to music',
    familyMembers :'Jane Doe (Daughter), ',
    socialHistory : 'Previous Occupation: Teacher : Hobbies: Reading, Gardening : ocial Activities: Weekly community center visits ',
    secondaryCaregiver :'Home Health Aide',
    advancedDirectives :'Living Will: Yes',
    homeSafety :'Grab bars in bathroom, Non-slip mats',
    locationTracking :'GPS Bracelet: Yes',
    wanderingAlerts :'Neighbor: Mark Smith',
    preferredCommunicationMethods :'Verbal, Non-verbal (gestures)',
    communicationTips :'Speak slowly and clearly, Use simple sentences',
    cognitiveFunction: 'Moderate memory loss, difficulty with complex tasks',
    functionalAbilities: 'Needs assistance with dressing and bathing',
    behavioralSymptoms: 'Occasional agitation and wandering',
    primaryCaregiver: 'Jane Doe (Wife)',
    physicianContact: 'Dr. Smith (Primary Care), Dr. Brown (Neurologist)',
    dailyRoutine: 'Wake up at 7 AM, breakfast at 8 AM, morning walk at 9 AM',
    preferredActivities: 'Listening to music, watching old movies',
    communicationPreferences: 'Prefers simple, clear language; speaks English',
    livingSituation: 'Lives with wife in a single-story home',
    safetyMeasures: 'Grab bars in bathroom, medication organizer, GPS tracker',
    environmentalFactors: 'Quiet neighborhood, close to parks',
    supportNetwork: 'Children visit on weekends, neighbor checks in daily',
    legalDocuments: 'Power of attorney, living will',
    financialInfo: 'Medicare, long-term care insurance',
    notes: 'Recently experienced a fall, no injuries but more supervision needed'
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(profile);
    UpdateProfile();
    
    
  };
  function sleep(ms: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function UpdateProfile() {
    Swal.fire({
      title: "You want to update?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update It!"
    }).then((result) => {
      if (result.isConfirmed) {
        showAlert();
        sleep(2500).then(() => {
          window.location.href="/home";
        });
      }
    });
  }
 

  function showAlert() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Profile Updated Successfully!",
      showConfirmButton: false,
      timer: 10000
    });
  }
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Patient Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Gender"
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={profile.address}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Emergency Contact Name"
                name="emergencyContactName"
                value={profile.emergencyContactName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Emergency Contact Relationship"
                name="emergencyContactRelationship"
                value={profile.emergencyContactRelationship}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Emergency Contact Phone"
                name="emergencyContactPhone"
                value={profile.emergencyContactPhone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Diagnosis"
                name="diagnosis"
                value={profile.diagnosis}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Physician Contact Information"
                name="physicianContact"
                value={profile.physicianContact}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Medications"
                name="medications"
                value={profile.medications}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Allergies"
                name="allergies"
                value={profile.allergies}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Medical History"
                name="medicalHistory"
                value={profile.medicalHistory}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Insurance Provider"
                name="insuranceProvider"
                value={profile.insuranceProvider}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Policy Number"
                name="policyNumber"
                value={profile.policyNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cognitive Functioning"
                name="cognitiveFunction"
                value={profile.cognitiveFunction}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Daily Living Skills"
                name="dailyLivingSkills"
                value={profile.dailyLivingSkills}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Assistive Devices"
                name="assistiveDevices"
                value={profile.assistiveDevices}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Behavioral Concerns"
                name="behavioralConcerns"
                value={profile.behavioralConcerns}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Emotional State"
                name="emotionalState"
                value={profile.emotionalState}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Family Members"
                name="familyMembers"
                value={profile.familyMembers}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Social History"
                name="socialHistory"
                value={profile.socialHistory}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Primary Caregiver"
                name="primaryCaregiver"
                value={profile.primaryCaregiver}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Secondary Caregiver"
                name="secondaryCaregiver"
                value={profile.secondaryCaregiver}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Daily Routine"
                name="dailyRoutine"
                value={profile.dailyRoutine}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Advanced Directives"
                name="advancedDirectives"
                value={profile.advancedDirectives}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Home Safety Modifications"
                name="homeSafety"
                value={profile.homeSafety}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location Tracking"
                name="locationTracking"
                value={profile.locationTracking}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Wandering Alerts"
                name="wanderingAlerts"
                value={profile.wanderingAlerts}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Preferred Communication Methods"
                name="preferredCommunicationMethods"
                value={profile.preferredCommunicationMethods}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Communication Tips"
                name="communicationTips"
                value={profile.communicationTips}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ProfileScreen;