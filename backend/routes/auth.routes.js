import express from "express"
import { signup, login, logout } from "../controllers/auth.controller.js"

const router = express.Router()

router.put("/signup", signup)

router.put("/login", login)

router.put("/logout", logout)

export default router