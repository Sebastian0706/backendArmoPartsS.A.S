import express from "express";
import { getlogin } from "../Controller/LoginController.js";

const router2 = express.Router();

router2.get('/login', getlogin);

export default router2;