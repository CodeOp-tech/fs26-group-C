import {
  Container,
  TextField,
  Box,
  Grid,
  Button,
  Link,
  Avatar,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Select from "react-select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import axios from "axios";

export default function Registration({ dateAdapter }) {
  //to see password value if user wants to
  const [visibility, setVisibility] = useState(false);

  //to perform validations on each input?
  const [fieldInfo, setFieldInfo] = useState();

  /*  
  result -->
  {name:"",
  surname:"", 
  email:""..}
  */

  const handleVisibility = () => {
    setVisibility(!visibility);
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectAdopter, setSelectAdopter] = useState(null); //is this still needed?
  const [userLocation, setUserLocation] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    location: "",
    date_of_birth: "",
    adopter: null,
  });

  
  useEffect(() => {
    onChangeGooglePlaces(userLocation);
  }, [userLocation]);

  const handleFormChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setUserInfo((state) => ({
      ...state,
      [name]: value,
    }));

    // setFieldInfo((state) => ({
    //   ...state,
    //   [name]: value,
    // }));

    //console.log(fieldInfo);
  };

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    console.log(selectedDate);

    const { $D, $M, $y } = selectedDate;

    setUserInfo((state) => ({
      ...state,
      date_of_birth: `${$y}-${$M + 1}-${$D}`,
    }));
  };

  async function onChangeGooglePlaces(e) {
    console.log(e);
    if (e) {
      const result = await geocodeByAddress(e.label);
      const locationname = result[0].formatted_address;
      const latLng = await getLatLng(result[0]);

      const locationLat = latLng.lat;
      const locationLng = latLng.lng;

      setUserInfo((state) => ({
        ...state,
        location: locationname,
      }));
    }
  }

  const options = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  // const handleAdopter = (selectAdopter) => {
  //   setSelectedAdopter(selectAdopter);

  //   setUserInfo((state) => ({
  //     ...state,
  //     adopter: selectAdopter.value,
  //   }));
  // };

  const handleAdopter = (e) => {
    setUserInfo((state) => (
      {
        ...state, adopter: e.value 
      }
    ))
  }

  function handleRegistration() {
    registerUser();
  }

  const registerUser = async () => {
    try {
      const { data } = await axios("/api/auth/register", {
        method: "POST",
        data: userInfo,
      });
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        mt: 10,
      }}
    >
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Box sx={{ mb: 2 }}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="name"
              label="Firstname"
              value={userInfo.name}
              onChange={handleFormChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="surname"
              label="Surname"
              value={userInfo.surname}
              onChange={handleFormChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="email"
              label="Email"
              value={userInfo.email}
              onChange={handleFormChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="username"
              label="Username"
              value={userInfo.username}
              onChange={handleFormChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type={visibility ? "text" : "password"}
              value={userInfo.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleVisibility}>
                      {visibility ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handleFormChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={12}>
            <DatePicker
              label="Date of Birth"
              value={selectedDate}
              renderInput={(params) => <TextField {...params} />}
              onChange={handleDateChange}
              dateAdapter={dateAdapter}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <PlacesAutocomplete
              selectProps={{
                placeholder: "Set your location",
                value: userLocation,
                onChange: setUserLocation,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Select
              placeholder="Are you joining to adopt?"
              options={options}
              value={selectAdopter}
              onChange={handleAdopter}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Button variant="contained" onClick={handleRegistration} fullWidth>
              Register
            </Button>
          </Grid>

          <Grid item sm={2}></Grid>

          <Grid item sm={8}>
            <Link to="/login" variant="body2" color="#000000" id="loginline">
              {"Already have an account? Log In."}
            </Link>
          </Grid>

          <Grid item sm={2}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
