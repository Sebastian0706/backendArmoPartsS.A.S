import { getConnection, sql } from "../Config/Connection.js";


const authenticateUser = async (usuario, contrasena) => {
    try {
        const pool = await sql.connect();
        const query = `
            SELECT *
            FROM Usuario
            WHERE Usuario = @usuario AND Contrasena = @contrasena
        `;

        const request = pool.request()
        request.input('usuario', sql.VarChar, usuario);
        request.input('contrasena', sql.VarChar, contrasena);

        const result = await request.query(query);
        return result.recordset;
    } catch (error) {
        console.error("Error en getUsuarioByCredenciales:", error);
        throw error;
    }
}

export { authenticateUser };