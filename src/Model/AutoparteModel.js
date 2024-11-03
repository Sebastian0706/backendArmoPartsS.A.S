import { sql, getConnection } from "../Config/Connection.js";

const getAllAutopartes = async () => {
    try {
        const con = await getConnection;
        const resultado = await con.query('SELECT * FROM Autoparte');
        return resultado.recordset;
    } catch (error) {
        throw error;
    }
}

const createAutoparte = async (autoparte) => {
    const { Id, Nombre } = autoparte;
    const con = await getConnection;
    try {
        await con.request()
            .input('Id', sql.Int, Id)            // Cambié a `Id` para coincidir con la columna en `INSERT`
            .input('Nombre', sql.VarChar, Nombre) // Cambié a `Nombre` para coincidir con la columna en `INSERT`
            .query('INSERT INTO Autoparte (Id, Nombre) VALUES (@Id, @Nombre)'); // Tabla y columnas coinciden con la BD
    } catch (error) {
        throw error;
    }
}

export { getAllAutopartes, createAutoparte };
