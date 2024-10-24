import express from "express";
import { login } from "../Controller/LoginController.js";

const router2 = express.Router();

router2.get('/login', login);

export default router2;