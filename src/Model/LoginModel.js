import { sql } from "../Config/Connection.js";


const login = async (usuario, contraseña) => {
    try {

        const result = await sql.query(`SELECT * FROM Usuario WHERE Usuario ='${usuario}' and Contraseña='${contraseña}'`);
       
        if (result.length < 0) {

            return false;
        }

        return result.recordset;

    }
    catch (error) {
        throw error;
    }
}

export { login }
