import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { Container, Box, TextField, Grid, Typography, Button } from '@mui/material';
import Select from 'react-select';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'; 


export default function AddPet() {
  const auth = useContext(AuthContext);
  const [ breeds, setBreeds ] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [input, setInput] = useState({
    user_id: auth.userId,
  });
  const [ petLocation, setPetLocation] = useState('');
  const [ passport, setPassport] = useState(null);
  const [vaccinated, setVaccinated] = useState(null);
  const [neutered, setNeutered] = useState(null);
  const [microchipped, setMicrochipped] = useState(null);
  const [gender, setGender] = useState("");



useEffect(() => {
  getBreeds();
}, [])

const getBreeds = async () => {
  try {
    const response = await fetch(`/api/breeds`, {
      method: "GET",
    });
    const data = await response.json();
    setBreeds(data);
  } catch (err) {
    console.log(err);
  }
}

const handleBreedChange = (selectedOption) => {
  setSelectedBreed(selectedOption);
  setSearchInput((state) => ({
    ...state,
    breed_id: selectedOption.value
  }))
}

const genderOptions = [
  { label: "Male", value: "Male"},
  { label: "Female", value: "Female"}
]


  const options = [ 
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  const handleVaccinatedChange = (selectedOption) => {
    setVaccinated(selectedOption);

    setInput((state) => ({
      ...state,
      vaccination_status: selectedOption.value
    }))
  };

  const handleNeuteredChange = (selectedOption) => {
    setNeutered(selectedOption);

    setInput((state) => ({
      ...state,
      neutered: selectedOption.value
    }))
  };

  const handleMicrochippedChange = (selectedOption) => {
    setMicrochipped(selectedOption);

    setInput((state) => ({
      ...state,
      chip: selectedOption.value
    }))
  };

  const handlePassportChange = (selectedOption) => {
    setPassport(selectedOption);

    setInput((state) => ({
      ...state,
      passport: selectedOption.value
    }))
  };

  const handleGenderChange = (selectedOption) => {
    setGender(selectedOption);

    setInput((state) => ({
      ...state,
      gender: selectedOption.value
    }))
  }



  return (
    <Container maxWidth="sm" >

      <Box sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>

          <Box sx={{ mb: 2 }}>
          <Grid item>
        <Typography variant="h5">
      Complete the form to list a pet for adoption
      </Typography>
        </Grid>
          </Box>

        

        

        

        
      
      

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder='Name'
        fullWidth></TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
        placeholder='Age'
        fullWidth></TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Select
          options={breeds.map((breed) => ({
            value: breed.id,
            label: breed.breed
          }))}
          value={selectedBreed}
          onChange={handleBreedChange} 
          placeholder="Breed"/>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select 
          value={gender}
          onChange={handleGenderChange}
          placeholder="Gender"
          options={genderOptions}/>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select 
          placeholder="Vaccinated"
          value={vaccinated}
          onChange={handleVaccinatedChange}
          options={options}/>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select 
          value={neutered}
          onChange={handleNeuteredChange}
          placeholder="Neutered/Spayed"
          options={options}/>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select 
          value={microchipped}
          onChange={handleMicrochippedChange}
          placeholder="Microchipped"
          options={options}/>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select 
          placeholder="Passport"
          options={options}
          value={passport}
          onChange={handlePassportChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <PlacesAutocomplete
          selectProps={{
            value: petLocation,
            onChange: setPetLocation,
            placeholder: "Location"
          }} 
         />
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
        placeholder='Medical Needs'
        fullWidth></TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
        placeholder='Special Needs'
        fullWidth></TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
        <TextField
        placeholder='Dietry Needs'
        fullWidth></TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
        <TextField
        placeholder='Bio'
        fullWidth></TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
        <Button variant='contained'
        fullWidth>Add Pet</Button>
        </Grid>










      </Grid>
      </Box>

      {/* <div>{auth.userId}</div> */}
    </Container>
    
  )
}
