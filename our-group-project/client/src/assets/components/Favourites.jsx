import axios from "axios"
import { useEffect, useState, useContext } from 'react'
import AuthContext from "../contexts/AuthContext";
import { Container, Grid, Chip, Divider, Button } from '@mui/material'
import PetCard from "./Pets/PetCard";

export default function Favourites() {
    
    const [favouritePets, setFavouritePets] = useState([]);
    

    const auth = useContext(AuthContext)
    useEffect(() => {
        getFavourites();
    },[])

    const getFavourites = async () => {
        try {
            const res = await axios.get(`api/users/favourites/${auth.userId}`)
            console.log(res.data[0].Pets) //object of pet_id/user_id
            setFavouritePets(res.data[0].Pets)
        }catch(error){
            console.log(error)
        }
    

    }

   

  return (
    <div >
       <Divider textAlign="left" style={{ marginBottom: "2vw", marginTop: "10vw" }}>
            <Chip label="My Favourites" />
          </Divider>
 <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4} style={{marginLeft:"15vw"}}>
          {favouritePets.map((pet) => (
            <Grid item key={pet.id} xs={12} sm={6} md={4} >
              <PetCard
                name={pet.name}
                bio={pet.bio}
                age={pet.age}
                location={pet.location}
                breed_id={pet.breed_id}
                id={pet.id}
                avatar={pet.avatar}
              />
              <Button size="small">Remove from Favourites</Button>
              {/* //NOT FUNCTIONAL */}
            </Grid>
            
          ))}
        </Grid>
        
      </Container>
           
    </div>
  )
}


 

 
