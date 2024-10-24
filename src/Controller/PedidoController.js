import { json } from "express";
import { getAllPedido } from "../Model/PedidoModel.js";


const getAllP = async (req, res) => {
    try {

        const pedido = await getAllPedido();
        res.json(pedido);

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

export { getAllP }