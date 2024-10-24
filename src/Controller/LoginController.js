import { authenticateUser} from "../Model/LoginModel.js";

const login = async (req, res) => {
    const { usuario, contrasena } = req.query;
    
    try {
        const credenciales =  await authenticateUser(usuario, contrasena);
        res.json(credenciales);
    } catch (error) {
        res.status(500).json({ message: "Error en el Servidor"});
    }
}
export {login}