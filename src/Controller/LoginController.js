import { json } from "express";
import { login } from "../Model/LoginModel.js";

const getlogin = async (req, res) => {

    // Si estás usando GET, los parámetros están en req.query, no en req.body
    const { usuario, contraseña } = req.query;

    try {
        const resultado = await login(usuario, contraseña);
        res.json(resultado);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export { getlogin };
