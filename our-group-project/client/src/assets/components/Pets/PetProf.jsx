import { useState, useEffect, useContext } from "react";
import { Container, Grid, Typography } from "@mui/material";
import PetCard from "./PetCard";
import AuthContext from "../../contexts/AuthContext";

export default function PetProf({}) {
  const [pets, setPets] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    getPets();
  });

  async function getPets() {
    try {
      const response = await fetch(`api/pets/user/${auth.userId}`, {
        method: "GET",
      });
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Typography>Your Pets</Typography>
          </Grid>
          {pets.map((pet) => (
            <Grid item key={pet.id} xs={12} sm={6} md={4}>
              <PetCard
                name={pet.name}
                bio={pet.bio}
                age={pet.age}
                breed={pet.Breed.breed}
                location={pet.location}
                breed_id={pet.breed_id}
                user_id={pet.user_id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
