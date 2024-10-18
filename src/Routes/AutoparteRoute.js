import express from "express";
import { getAllA } from "../Controller/AutoparteController.js";
const router = express.Router();

router.get('/listarc', getAllA);

export default router;