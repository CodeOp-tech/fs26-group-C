import { NavLink, useParams } from "react-router-dom";

const users = [
  {
    id: 21,
    name: "Grace",
  },
  {
    id: 22,
    name: "Jane",
  },
  {
    id: 23,
    name: "Natalie",
  },
  {
    id: 24,
    name: "John",
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
