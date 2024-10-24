import express from "express";
import { getAllE } from "../Controller/EmpleadoController.js";
const router3 = express.Router();

router3.get('/listarE', getAllE);

export default router3;