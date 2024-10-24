import express from "express";
import { getAllA } from "../Controller/AutoparteController.js";
const router = express.Router();

router.get('/listar', getAllA);

export default router;