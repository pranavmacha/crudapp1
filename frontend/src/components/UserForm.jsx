import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export default function UserForm({ refresh }) {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, { ...form, age: parseInt(form.age) });
    setForm({ name: "", email: "", age: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} value={form.name} />
      <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} value={form.age} />
      <button type="submit">Add User</button>
    </form>
  );
}
