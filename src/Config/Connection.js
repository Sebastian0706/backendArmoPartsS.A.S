import sql from 'mssql'
import dotenv from 'dotenv'
dotenv.config();

const StringConnection = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options:
    {
        trustServerCertificate: true,

    },
};
/* 
const getConnection = async () => {

    try {
        await sql.connect(StringConnection);
        console.log('Conectados a la BD')
    } catch (error) {
        console.log('Error: ', error);
        process.exit(1);
    }
}*/
const getConnection = new sql.ConnectionPool(StringConnection)
    .connect()
    .then(pool => {
        console.log('Conectados')
        return pool
    })
    .catch(err => console.log('Error de conexion a la bd', err))

export { sql, getConnection }