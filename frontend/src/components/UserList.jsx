import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export default function UserList({ users, refresh }) {
  const deleteUser = async (id) => {
    await axios.delete(`${API}/${id}`);
    refresh();
  };

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          {u.name} ({u.email}) - {u.age} yrs
          <button onClick={() => deleteUser(u.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
