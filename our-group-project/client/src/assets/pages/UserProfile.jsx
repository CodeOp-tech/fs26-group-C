//import axios from "axios";
//import { useEffect, useState } from "react";
import ProfileAvatar from "../components/ProfileAvatar";


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
    <div>
      <h1>User Profile</h1>   
      <div>
        <ProfileAvatar />
      </div>
    </div>
  );
}
