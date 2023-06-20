import { NavLink, useParams } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Grace",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Natalie",
  },
  {
    id: 4,
    name: "John",
  },
  {
    id: 5,
    name: "Roger",
  },
];

export default function List() {
  let { sender } = useParams();

  return (
    <div className="list-group users-list">
      {users
        .filter((e) => e.id != sender)
        .map((user) => (
          <NavLink
            to={`/chat/${sender}/${user.id}`}
            key={user.id}
            className="list-group-item list-group-item-action border-right-0 border-left-0 rounded-0"
          >
            <h6 className="my-0">{user.name}</h6>
          </NavLink>
        ))}
    </div>
  );
}
