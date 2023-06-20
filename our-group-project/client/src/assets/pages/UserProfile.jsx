import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ProfileAvatar from "../components/design/ProfileAvatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AuthContext from "../contexts/AuthContext";
import {
  IconButton,
  Button,
  Box,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Icon
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Slider from "../components/design/Slider";
import { useNavigate } from "react-router-dom";

//DO WE NEED AN EDIT PROFILE BUTTON? i THINK SO...BUT NO IDEA HOW TO REALLY IMPLEMENT IT

export default function UserProfile() {
  const auth = useContext(AuthContext);
  const [pets, setPets] = useState([]);
  const [typeUser, setTypeUser] = useState(null);
  const [tempUser, setTempUser] = useState(false);
  const [saveChanges, setSaveChanges] = useState(null);
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  useEffect(() => {
    requestPrivateData();
    getPets();
    if (auth.adopter === "true") {
      setTypeUser(true);
    } else if (auth.adopter === "false") {
      setTypeUser(false);
    } else if (auth.adopter === "null") {
      setTypeUser(null);
    }
  }, []);

  const [data, setData] = useState({});
  const requestPrivateData = async () => {
    try {
      const { data } = await axios("/api/auth/profile", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log("data", data);
      setData({ data });
    } catch (error) {
      console.log("error", error);
    }
  };

  const addPet = (newPet) => {
    setPets((state) => [...state, newPet]);
  };

  const handleChange = (event) => {
    val = event.target.value;
    setValue(event.target.value);
    if (val === "true") {
      setTempUser(true);
    } else {
      setTempUser(false);
    }

    console.log(tempUser);
  };

  const handleSave = () => {
    setSaveChanges(true);
    if (tempUser) {
      setTypeUser(true);
    } else {
      setTypeUser(false);
    }

    localStorage.removeItem("adopter");
    localStorage.setItem("adopter", typeUser); // to save the change in the whole app

    //will also need to post changes in Backend
  };

  let val = "";

  const handleRadio = (e) => {
    val = e.target.value;
    if (val !== "true") {
      setTempUser(true);
    } else {
      setTempUser(false);
    }
  };

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
      <div className="row" style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
        <div className="col-5">
          <ProfileAvatar />
          <div className="row my-3 mx-1"></div>
        </div>
        <div className="col-7" >
          <div className="row" style={{ paddingTop: "2vw", marginLeft:"6vw" }}>
            <h3> {auth.name}</h3>
          
            <div className="row" style={{ paddingTop: "2vw" }}>
              {typeUser === null ? (
                <div>
                  <FormControl>
                    <RadioGroup
                      onChange={handleChange}
                      value={value}
                      name="adopt"
                      size="small"
                      color="secondary"
                    >
                      <FormControlLabel
                        value="true"
                        control={<Radio />}
                        label="Looking to adopt"
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio />}
                        label="Looking for a home"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              ) : null}
            </div>
            <div>
              {typeUser === true ? <p>Looking to adopt!</p> : null}
              {typeUser === false ? <p>Looking for a home!</p> : null}
            </div>
            <div className="row" style={{ paddingTop: "1vw" , fontWeight:"bold", fontSize:"1.8vw"}}>
             

                <LocationOnIcon
                  color="secondary"
                  style={{ display: "inline", margin: "0.5vw" }}
                />
              
                
                {auth.location}
                
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ margin: "2vw 5.5vw", display: "flex" }}>
        <div>
          <Box sx={{ width: "100%", marginBottom: "2vw" }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate(`/pet_view`)}
            >
              {" "}
              Pet View
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate(`/gallery`)}
            >
              {" "}
              Gallery
            </Button>
          </Box>
        </div>

        <TextareaAutosize
          placeholder="Let us know who you are!"
          minRows={10}
          sx={{ border: "0.5vw solid " }}
        ></TextareaAutosize>
        <div className="col" style={{ margin: "2vw 5.5vw" }}>
          {tempUser ? (
            <div>
              <TextareaAutosize
                placeholder="Why do you want to adopt?"
                minRows={5}
                sx={{ border: "0.5vw solid " }}
              ></TextareaAutosize>
            </div>
          ) : (
            <div>
              <TextareaAutosize
                placeholder="Why are you looking fot a new home for your pet(s)?"
                minRows={5}
                sx={{ border: "0.5vw solid " }}
              ></TextareaAutosize>
            </div>
          )}
        </div>

        <div className="col" style={{ marginTop: "2vw" }}>
          {tempUser ? (
            <div>
              <TextareaAutosize
                placeholder="What is your ideal pet?"
                minRows={5}
                sx={{ border: "0.5vw solid " }}
              ></TextareaAutosize>
            </div>
          ) : (
            <div>
              <TextareaAutosize
                placeholder="What is the ideal home for your pet(s)?"
                minRows={5}
                sx={{ border: "0.5vw solid " }}
              ></TextareaAutosize>
            </div>
          )}
        </div>

        {tempUser ? (
          <div>
            <div style={{ margin: "2vw 5.5vw", display: "flex" }}>
              <div className="col" style={{ marginTop: "1vw" }}>
                <div>
                  <label> Activity Level</label>
                  <Slider />
                </div>
                <div>
                  <label> Large Space available</label>
                  <Slider />
                </div>
                <div>
                  <label> Something else</label>
                  <Slider />
                </div>
              </div>
              <div className="col" style={{ marginTop: "1vw" }}>
                <div>
                  <label> More things</label>
                  <Slider />
                </div>
                <div>
                  <label> We love slidin</label>
                  <Slider />
                </div>
                <div>
                  <label> *Drake said it best* </label>
                  <Slider />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* <Container>
              <AddPet />
            </Container>
              {/* <PetProf addPet={(newPet) => addPet(newPet)}/> */}
            {/* <Container sx={{ py: 8 }} maxWidth="lg">
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
                    /> */}
            {/* </Grid>
                ))}
              </Grid>
            </Container> */}
          </div>
        )}
      </div>

      <div style={{ margin: "2vw 5.5vw", display: "flex" }}>
        <Button variant="outlined" color="secondary" onClick={handleSave}>
          Save your changes
        </Button>
      </div>
    </div>
  );
}
