import { sql } from "../Config/Connection.js";

const getAllEmpleados = async () => {
    try {

        const resultado = await sql.query('SELECT * FROM Empleado')
        return resultado.recordset;

    } catch (error) {
        throw error;
    }
}

export { getAllEmpleados }