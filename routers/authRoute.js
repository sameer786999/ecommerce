import express from "express";
import {registerController} from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js";
//router object

const router=express.Router();



//routing
//register
router.post('/register',registerController);

//login
router.post('/login',loginController);
export default router;