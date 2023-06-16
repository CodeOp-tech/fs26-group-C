import React from 'react'
import { Container, Button, Box, Grid, TextField, Avatar,
 Typography, CssBaseline } from "@mui/material"
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { TextareaAutosize } from "@mui/material/";

export default function ContactUs() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ContactSupportIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            What would you like to know?
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}></Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              label="email"
              name="email"
            />

            <TextareaAutosize minRows={5} style={{ padding: "2vw 10vw", textAlign:"left" }} placeholder="Talk to us!">
              
            </TextareaAutosize>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </CssBaseline>
    </Container>
  );
}

  

      

  
