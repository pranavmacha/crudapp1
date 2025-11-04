import axios from "axios";
import { useState } from "react";

const API = "https://crudapp1-backend.onrender.com/api/users";

export default function UserList({ users, refresh }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: "", email: "", age: "" });

  const deleteUser = async (id) => {
    await axios.delete(`${API}/${id}`);
    refresh();
  };

  const startEdit = (user) => {
    setEditingId(user.id);
    setEditData({ name: user.name, email: user.email, age: user.age });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = async (id) => {
    await axios.put(`${API}/${id}`, { ...editData, age: parseInt(editData.age) });
    setEditingId(null);
    refresh();
  };

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id} style={{ marginBottom: "10px" }}>
          {editingId === u.id ? (
            <>
              <input name="name" value={editData.name} onChange={handleEditChange} />
              <input name="email" value={editData.email} onChange={handleEditChange} />
              <input name="age" type="number" value={editData.age} onChange={handleEditChange} />
              <button onClick={() => saveEdit(u.id)}>💾 Save</button>
              <button onClick={() => setEditingId(null)}>❌ Cancel</button>
            </>
          ) : (
            <>
              {u.name} ({u.email}) - {u.age} yrs
              <button onClick={() => startEdit(u)}>✏️ Edit</button>
              <button onClick={() => deleteUser(u.id)}>🗑 Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
