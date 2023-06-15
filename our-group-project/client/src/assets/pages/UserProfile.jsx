import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ProfileAvatar from "../components/ProfileAvatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AuthContext from "../contexts/AuthContext";

export default function UserProfile() {
  const [userData, setUserData] = useState(null);
  const auth = useContext(AuthContext);

  useEffect(() => {
    requestPrivateData();
  }, []);

  const requestPrivateData = async () => {
    try {
      const { data } = await axios("/api/auth/profile", {
        headers: {
          authorization: "Bearer" + localStorage.getItem("token"),
        },
      });
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row" style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
      <div className="col-5">
        <ProfileAvatar />
      </div>
      <div className="col-4">

        <div className="row" style={{paddingTop: "2vw" }}>
            <h3> Some Awesome Name</h3>
          <div className="row" style={{paddingTop: "2vw" }}>
            <h6> Some catchy Phrase</h6>
          </div>
          <div className="row" style={{paddingTop: "2vw" }}>
            <LocationOnIcon color="secondary" /> {/* NOT SHOWING WHY? */}
            Barcelona
          </div>

        </div>
      </div>
    </div>
  );
}
