import express from "express";
import { newUser } from "../controllers/user.controller.js";
const router = express.Router();

export default router;

router.get("/new", newUser);
