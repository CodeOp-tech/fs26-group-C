//import axios from "axios";
//import { useEffect, useState, useContext } from "react";
import ProfileAvatar from "../components/ProfileAvatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
//import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
//import AuthContext from "../contexts/AuthContext";

export default function UserProfile() {
  // const [data, setData] = useState(null);

  // const auth = useContext(AuthContext)
  // useEffect(() => {
  //  // requestPrivateData();
  //   getUserData(id)
  // }, []);

  // const requestPrivateData = async () => {
  //   try {
  //     const { data } = await axios("/api/auth/profile", {
  //       headers: {
  //         authorization: "Bearer" + localStorage.getItem("token"),
  //       },
  //     });
  //     setData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getUserData = async (id) => {
  //   try {
  //     const {data} = await axios(`/api/user/${id}`)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <div>
      <div className="row" style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
        <div className="col-5">
          <ProfileAvatar />
        </div>
        <div className="col-4">
          <div className="row" style={{ paddingTop: "2vw" }}>
            <h3> Some Awesome Name</h3>
            <div className="row" style={{ paddingTop: "2vw" }}>
              <h6> Some catchy Phrase</h6>
            </div>
            <div className="row" style={{ paddingTop: "1vw" }}>
              <IconButton style={{ width: "35%"}} disabled> 
                <LocationOnIcon color="secondary" style={{display: "inline"}} /> 
                Barcelona
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
