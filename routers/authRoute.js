import express from "express";
import {registerController, testController} from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
//router object

const router=express.Router();



//routing
//register
router.post('/register',registerController);

//login
router.post('/login',loginController);

//test
router.get("/test",requireSignIn, testController);
export default router;
