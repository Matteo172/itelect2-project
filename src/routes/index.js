import express from "express";
import { tasks } from "../utils.js";
import { fetchSampleUsers } from "../api.js";

const router = express.Router();

let cachedUsers = [];
fetchSampleUsers().then((users) => {
  cachedUsers = users;
});

router.get("/tasks", (req, res) => {
  res.json(tasks);
});

router.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

router.get("/users", (req, res) => {
  res.json(cachedUsers);
});

export default router;