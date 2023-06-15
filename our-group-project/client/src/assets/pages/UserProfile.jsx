import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ProfileAvatar from "../components/ProfileAvatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AuthContext from "../contexts/AuthContext";
//import TextField from "@mui/material/TextField";
import { IconButton, Button } from "@mui/material";
import { NearMeOutlined } from "@mui/icons-material";

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
            <p> {auth.userId}</p>
            <div className="row" style={{ paddingTop: "2vw" }}>
              <h6> Some catchy Phrase</h6>
            </div>
            <div className="row" style={{ paddingTop: "1vw" }}>
              <IconButton style={{ width: "35%" }} disabled>
                <LocationOnIcon
                  color="secondary"
                  style={{ display: "inline" }}
                />
                {auth.location}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
