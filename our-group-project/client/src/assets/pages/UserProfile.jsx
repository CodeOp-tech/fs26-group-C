import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ProfileAvatar from "../components/ProfileAvatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AuthContext from "../contexts/AuthContext";
//import TextField from "@mui/material/TextField";
import { IconButton, Button, Container, Box, Grid, Typography } from "@mui/material";
import { NearMeOutlined } from "@mui/icons-material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Slider from '../components/design/Slider'
import PetCard from "../components/PetCard";


export default function UserProfile() {
  const auth = useContext(AuthContext);
  const [pets, setPets] = useState([])
  
  useEffect(() => {
    requestPrivateData();
    getPets();
  }, []);
  
  const [data, setData] = useState({});
  const requestPrivateData = async () => {
    try {
      const { data } = await axios("/api/auth/profile", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log("data",data)
      setData({data});
    } catch (error) {
      console.log("error",error);
    }
  };

  async function getPets() {
    try {
      const response = await fetch(`api/pets/user/${auth.userId}`, {
        method: "GET",
      });
      const data = await response.json();
      setPets(data);
    } catch(error) {
      console.log(error);
    }
  }

 

  return (
    <div>
      <div className="row" style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
        <div className="col-5">
          <ProfileAvatar />
        </div>
        <div className="col-4">
          <div className="row" style={{ paddingTop: "2vw" }}>
            <h3> {auth.name}</h3>
            <div className="row" style={{ paddingTop: "2vw" }}>
              <h6> Some catchy Phrase</h6>
            </div>
            <div className="row" style={{ paddingTop: "1vw" }}>
              <IconButton style={{ width: "55%" , fontSize:"1.4vw"}} disabled>
                <LocationOnIcon
                  color="secondary"
                  style={{ display: "inline", margin:"0.5vw"}}
                
                />
                {auth.location}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{margin:"2vw 5.5vw", display:"flex"}}>
        <TextareaAutosize placeholder="Let us know who you are!"  minRows={10} sx={{border: "0.5vw solid " }}></TextareaAutosize>
      
        <div className="col" style={{marginTop:"2vw"}}>
        {
          auth.adopter ? <div><TextareaAutosize placeholder="Why do you want to adopt?"  minRows={5} sx={{border: "0.5vw solid " }}></TextareaAutosize>
          </div> : <div><TextareaAutosize placeholder="Why are you looking fot a new home for your pet(s)?"  minRows={5} sx={{border: "0.5vw solid " }}></TextareaAutosize>
          </div>
        }
       </div>

        <div className="col" style={{marginTop:"2vw"}}>
        {
          !auth.adopter ? <div><TextareaAutosize placeholder="Why do you want to adopt?"  minRows={5} sx={{border: "0.5vw solid " }}></TextareaAutosize>
          </div> : <div><TextareaAutosize placeholder="Why are you looking fot a new home for your pet(s)?"  minRows={5} sx={{border: "0.5vw solid " }}></TextareaAutosize>
          </div>
        }

        </div>

        <div className="col" style={{marginTop:"2vw"}}>
        {
          auth.adopter ? <div><TextareaAutosize placeholder="Why do you want to adopt?"  minRows={5} sx={{border: "0.5vw solid " }}></TextareaAutosize>
          </div> : <div><TextareaAutosize placeholder="Why are you looking fot a new home for your pet(s)?"  minRows={5} sx={{border: "0.5vw solid " }}></TextareaAutosize>
          </div>
        }

        </div>

        
        <div className="col" style={{marginTop:"2vw"}}>
        {
          !auth.adopter ? <div><TextareaAutosize placeholder="Why do you want to adopt?"  minRows={5} sx={{border: "0.5vw solid " }}></TextareaAutosize>
          </div> : <div><TextareaAutosize placeholder="Why are you looking fot a new home for your pet(s)?"  minRows={5} sx={{border: "0.5vw solid " }}></TextareaAutosize>
          </div>
        }

        </div>
        <div  style={{ marginTop: "1vw" , display:"flex"}}>
        <div className="col" style={{marginTop:"1vw"}}>
          <div >
            <label> Activity Level</label>
            <Slider color="primary.main"/>
          </div>
          <div >
            <label> Large Space available</label>
            <Slider />
          </div>
          <div >
            <label> Something else</label>
            <Slider  />
          </div>
          </div>
          <div className="col" style={{marginTop:"1vw"}}>
          <div >
            <label> More things</label>
            <Slider  />
          </div>
          <div >
            <label> We love slidin</label>
            <Slider />
          </div>
          <div >
            <label> *Drake said it best* </label>
            <Slider  />
          </div>
        </div>
        </div>

        
      </div>

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
            user_id={pet.user_id}/>
           </Grid>
          ))}
        </Grid>

      </Container>
      
    </div>
  );
}