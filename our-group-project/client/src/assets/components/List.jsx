import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";



export default function List() {
  let { sender, receiver } = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, [sender, receiver]);

  async function getUsers() {
    try {
      const { data } = await axios(`/api/friends/?include=${receiver}`, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      
      setUsers(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="list-group users-list">
      {users
        // .filter((e) => e.id != sender)
        .map((user) => (
          <NavLink
            to={`/chat/${sender}/${user.id}`}
            key={user.id}
            className="list-group-item list-group-item-action border-right-0 border-left-0 rounded-0"
          >
            <h6 className="my-0">{user.username}</h6>
          </NavLink>
        ))}
    </div>
  );
}
