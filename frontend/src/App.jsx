import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const API = "http://localhost:5000/api/users";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1>👨‍💻 MERN + Prisma CRUD</h1>
      <UserForm refresh={fetchUsers} />
      <UserList users={users} refresh={fetchUsers} />
    </div>
  );
}

export default App;
