//import axios from "axios";
//import { useEffect, useState } from "react";
import ProfileAvatar from "../components/ProfileAvatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function UserProfile() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   requestPrivateData();
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
  return (
    <div className="row" style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
      <div className="col-5">
        <ProfileAvatar />
      </div>
        <div className="col-4">
          <h3> Someone's Name</h3>
        <h6> Some catchy Phrase</h6>
        <LocationOnIcon color="secondary"/>  Barcelona 
        </div>
    </div>
  );
}
