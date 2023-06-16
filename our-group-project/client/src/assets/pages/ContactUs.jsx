import React from 'react'
import { Container, Button, Box, Grid, TextField } from "@mui/material"

export default function ContactUs() {
  return (
    <Container component="main"
    maxWidth="xs"
    sx={{
      mt: 10,
    }}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
        <TextField
        placeholder='Send us a message'
        fullWidth></TextField>
        </Grid>

      


      <Button variant='contained'>hello</Button>

      </Grid>

    </Container>
  )
}
