import * as authController from "../controllers/authController.js";
import express from "express";

const authRoutes = express.Router();

authRoutes.post('/register', authController.registerStudent);

authRoutes.get('/students', authController.fetchStudents);

authRoutes.get('/students/:id', authController.getStudentById);

export default authRoutes;