import React from 'react';
import {Container, TextField, Box, Grid, Button, FormControlLabel} from "@mui/material";
import { useState } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Select from 'react-select'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




export default function Registration() {
  const [ userInfo, setUserInfo] = useState({
    name:"",
    surname: "",
    username: "",
    email: "",
    password: "",
    location: "",
    date_of_birth: "",
    adopter: false,
  })

  const [ selectedDate, setSelectedDate ] = useState(null);

  const handleFormChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setUserInfo((state) => ({
      ...state, 
      [name]: value,
    }));

  }

  return (
    <Container component="main" maxWidth="xs" sx={{
      mt:10
      }}>
        <CssBaseline/>

      <Box sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
      <Grid container spacing={2}>

       <Grid item xs={12} sm={6}>
      <TextField
      required
      name="name"
      label="Firstname"
      value={userInfo.name}
      onChange={handleFormChange}>
      </TextField>
      </Grid>

      <Grid item xs={12} sm={6}>
      <TextField
      required
      name="surname"
      label="Surname"
      value={userInfo.surname}
      onChange={handleFormChange}>
      </TextField>
      </Grid>

      <Grid item xs={12} sm={6}>
      <TextField
      required
      name="email"
      label="Email"
      value={userInfo.email}
      onChange={handleFormChange}>
      </TextField>
      </Grid>

      <Grid item xs={12} sm={6}>
      <TextField
      required
      name="username"
      label="Username"
      value={userInfo.username}
      onChange={handleFormChange}>
      </TextField>
      </Grid>

      <Grid item xs={12} sm={12}>
      <TextField
      required
      fullWidth
      name="password"
      label="Password"
      value={userInfo.password}
      onChange={handleFormChange}>
      </TextField>
      </Grid>

      <Grid item xs={12} sm={12}>
        <DatePicker/>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Select
        placeholder="Are you joining to adopt?"/>
      </Grid>

      




      <Grid item xs={12} sm={12}>
        <Button 
        variant="contained"
        fullWidth
        >Register</Button>
      </Grid>





    </Grid>

    </Box>
    </Container>
   
  )
}
