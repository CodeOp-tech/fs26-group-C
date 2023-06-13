import React from 'react';
import { Container, Box, Typography, Stack, Grid, Button } from '@mui/material';
import Select from 'react-select';

export default function SearchPets() {
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
            welcome
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
