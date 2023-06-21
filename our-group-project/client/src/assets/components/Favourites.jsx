import axios from "axios"
import { useEffect, useState, useContext } from 'react'
import AuthContext from "../contexts/AuthContext";

export default function Favourites() {
    
    const [favouritePets, setFavouritePets] = useState();
    

    const auth = useContext(AuthContext)
    useEffect(() => {
        getFavourites();
    },[])

    const getFavourites = async () => {
        try {
            const res = await axios.get(`api/users/favourites/${auth.userId}`)
            console.log(res)
            setFavouritePets(res.data)
        }catch(error){
            console.log(error)
        }
    

    }

   

  return (
      <div>
        favourites
          
    </div>
  )
}

/*
 
 <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {pets.map((pet) => (
            <Grid item key={pet.id} xs={12} sm={6} md={4} >
              <PetCard
                name={pet.name}
                bio={pet.bio}
                age={pet.age}
                breed={pet.Breed.breed}
                location={pet.location}
                breed_id={pet.breed_id}
                id={pet.id}
                avatar={pet.avatar}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
 
 
 */
