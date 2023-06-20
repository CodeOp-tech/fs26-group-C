import PetProfileAvatar from "../components/design/PetProfileAvatar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Link, Button, Typography, Grid } from "@mui/material";



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
      <Container component="main" maxWidth="md" sx={{ mt: 5}} >
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
          <PetProfileAvatar />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}> 
              <Typography variant="h3">{pet.name}</Typography>
              </Grid>

              <Grid item >
                <Typography> 
                  listed by {user.username}
                  </Typography>
              </Grid>
              <Grid item sm={12} >
                <Typography>
                  {pet.location}
                </Typography>
              </Grid>
              <Grid>
                <Typography><i className="fa-solid fa-vial-circle-check"></i></Typography>
                <Typography><i className="fa-solid fa-passport"></i></Typography>
              </Grid>



            
            </Grid>
            
          </Grid>

     
      </Grid>
      </Container>
    </div>
  )
}
