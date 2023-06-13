import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Box, Typography, Stack, Grid, Button } from '@mui/material';
import Select from 'react-select';

export default function SearchPets() {
const [ breeds, setBreeds ] = useState([]);
const [ selectedBreed, setSelectedBreed ] = useState('');
const [selectedOption, setSelectedOption] = useState("");

useEffect(() => {
  getBreeds();
}, []);



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
  setSelectedOption(selectedOption);
}
  return (
    <main>
      <Box sx={{
          bgcolor: "background.paper",
          pt: 8,
        }}>
        <Container sx={{ justifyContent: "center" }} maxWidth="md">
          <Typography
          component="h6"
          variant="h6"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ fontFamily: "Oooh Baby", fontSize: 80 }}>
            Give a Forever Home
          </Typography>
          <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ justifyContent: "center" }}>
            Hello! And thank you for taking the steps to join us. Here at "name", we want to ensure that all dogs are 
            given a safe home.
            Browse below.

          </Typography>

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          ></Stack>
        </Container>
      </Box>

      <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Select placeholder="this is a placeholder for the location"></Select>
          </Grid>
          <Grid item xs={12} sm={5}>
        <Select
        options={breeds.map((breed) => ({
          value: breed.id,
          label: breed.breed
        }))}
        value={selectedOption}
        onChange={handleBreedChange}
        placeholder="Select a breed."></Select>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
            variant='contained'>Search</Button>
          </Grid>
          {/* <Grid item xs={12} sm={2}>
            <Button
            variant='contained'>Clear</Button>
          </Grid> */}
          </Grid>
      </Box>
      </Container>


    </main>

  )
}
