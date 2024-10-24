import { sql } from "../Config/Connection.js";

const getAllPedido = async () => {
    try {

        const resultado = await sql.query('SELECT * FROM Pedido')
        return resultado.recordset;

    } catch (error) {
        throw error;
    }
}

export { getAllPedido }