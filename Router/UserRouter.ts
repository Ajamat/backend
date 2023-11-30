const express = require("express")
const router = express.Router();
import UserController from '../Controllers/UserController'

// Register 
router.post("/register",UserController.register)
router.post("/login",UserController.login)


export default router;