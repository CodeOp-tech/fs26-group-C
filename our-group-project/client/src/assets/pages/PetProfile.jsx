import PetProfileAvatar from "../components/design/PetProfileAvatar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Link, Button, Typography, Grid, Divider, Chip } from "@mui/material";




export default function PetProfile() {
  const { pet_id } = useParams();
  const [ pet, setPet ] = useState({});
  const [user, setUser ] = useState({});
  const [breed, setBreed ] = useState({});


  useEffect(() => {
    loadPet();
    }, [pet_id])

    async function loadPet() {
      try {
        const response = await fetch(`/api/pets/${pet_id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch pet data");
        }
        const petData = await response.json();

        const [userResponse, breedResponse] = await Promise.all([
          fetch(`/api/users/${petData.user_id}`),
          fetch(`/api/breeds/${petData.breed_id}`)
        ]);
    
        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await userResponse.json();
    
        if (!breedResponse.ok) {
          throw new Error("Failed to fetch breed data");
        }
        const breedData = await breedResponse.json();
    
        setPet(petData);
        setUser(userData);
        setBreed(breedData);
        
      } catch(err) {
        console.log(err)
  
      }
    }


  return (
    <div>
      <Container component="main" maxWidth="lg" sx={{ mt: 5}} >
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
          <PetProfileAvatar />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}> 
              <Typography variant="h3">{pet.name}</Typography>
              </Grid>

              <Grid item sm={12} >
                <Typography variant="h5"> 
                  <i class="fa-solid fa-user"></i> {user.username}
                  </Typography>
              </Grid>
              <Grid item sm={3} >
                <Typography variant="h6">
                <i class="fa-solid fa-location-dot"></i> {pet.location}
                </Typography>
              </Grid>
              <Grid item sm={6}>
                <Typography variant="h6"><i className="fa-solid fa-dog"></i> {breed.breed}</Typography>
              </Grid>

              

              <Grid container spacing={2} sx={{ mt: 2}}>
                {pet.vaccination_status === true &&
                <Grid item  >
                  <Typography variant="h6"><i className="fa-solid fa-vial-circle-check"></i> Vaccinated </Typography>
                  </Grid>}
                  {pet.passport === true &&
               <Grid item>
               <Typography variant="h6"><i className="fa-solid fa-passport"></i> Passport</Typography>
               </Grid>}
               {pet.chip === true &&
               <Grid item>
                <Typography variant="h6"><i className="fa-solid fa-microchip"></i> Microchipped</Typography>
               </Grid>}
               {pet.neutered === true &&
               <Grid item>
                <Typography variant="h6"><i className="fa-solid fa-check"></i> Neutered</Typography>
               </Grid>}

               <Grid item xs={12}>
               <Divider textAlign="left">
                <Chip label="Bio"/>
               </Divider>
                <Typography>{pet.bio}</Typography>
               </Grid>

               <Grid item xs={12}>
               <Divider textAlign="left">
                <Chip label="Medical Needs"/>
               </Divider>
              <Typography>{pet.medical_issues}</Typography>
               </Grid>

               <Grid item xs={12}>
               <Divider textAlign="left">
                <Chip label="Dietry Needs"/>
               </Divider>
              <Typography>{pet.diet}</Typography>
               </Grid>

               <Grid item xs={12}>
               <Divider textAlign="left">
                <Chip label="Other Special Needs"/>
               </Divider>
              <Typography>{pet.special_needs}</Typography>
               </Grid>
               
              </Grid>

              <Grid sx={{mt: 2}} container spacing={2}>
                <Grid item >
                <Button variant="contained" color="secondary"><i className="fa-solid fa-comments"></i>  Message User</Button>
                </Grid>
              
              </Grid>

              



            
            </Grid>
            
          </Grid>

     
      </Grid>
      </Container>
    </div>
  )
}
