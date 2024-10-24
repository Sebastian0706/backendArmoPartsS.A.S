import express from "express";
import {getAllP} from "../Controller/PedidoController.js";
const router4 = express.Router();

router4.get('/listarP', getAllP);

export default router4;