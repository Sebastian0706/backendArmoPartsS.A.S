import express from "express";
import { getAllA } from "../Controller/CiudadController.js";
const router = express.Router();

router.get('/listarc', getAllA);

export default router;