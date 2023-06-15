import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ProfileAvatar from "../components/ProfileAvatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AuthContext from "../contexts/AuthContext";
//import TextField from "@mui/material/TextField";
import { IconButton, Button } from "@mui/material";
import { NearMeOutlined } from "@mui/icons-material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Slider from '../components/design/Slider'


export default function UserProfile() {
  const auth = useContext(AuthContext);
  
  useEffect(() => {
    requestPrivateData();
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

  // const getUserData = async (id) => {
  //   try {
  //     const { data } = await axios(`/api/user/${id}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
            <Slider  />
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
      
    </div>
  );
}
