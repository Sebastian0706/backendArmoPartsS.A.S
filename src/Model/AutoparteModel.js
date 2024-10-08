import { sql } from "../Config/Connection.js";

const getAllAutopartes = async ()=>{
    try {
        
        const resultado = await sql.query('SELECT * FROM tblAutoparte')
        return resultado.recordset; 

    } catch (error) {
     throw error;   
    }
}

export{getAllAutopartes}