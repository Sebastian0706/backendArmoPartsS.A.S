import express from "express";
import { getAllA ,addAuto } from "../Controller/AutoparteController.js";

const router = express.Router();

router.get('/listar', getAllA);
router.post('/listar', addAuto)

export default router;



