import * as userController from "../controllers/UserController.js";
import express from "express";
//import authHandler from "../middleware/authHandler.js";

const userRoutes = express.Router();

//userRoutes.use(authHandler)
userRoutes.get('/all', userController.fetchuser);

userRoutes.post('/register', userController.Register);

userRoutes.post('/login', userController.userLogin);


export default userRoutes;