import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import requireRole from "../middleware/requireRole.js";
import {
  listTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  listUsers,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/tasks", listTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", verifyToken, createTask);
router.put("/tasks/:id", verifyToken, updateTask);
router.delete("/tasks/:id", verifyToken, requireRole("admin"), deleteTask);
router.get("/users", listUsers);

export default router;