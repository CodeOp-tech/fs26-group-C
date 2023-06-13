import React from 'react'
import { Container, Box, Typography } from '@mui/material'

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

        </Container>

      </Box>


    </main>

  )
}
