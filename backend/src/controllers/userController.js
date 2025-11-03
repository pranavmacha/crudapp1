import prisma from "../prismaClient.js";

// Create
export const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await prisma.user.create({ data: { name, email, age } });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read all
export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

// Update
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email, age },
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id } });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
