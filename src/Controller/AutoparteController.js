import { getAllAutopartes, createAutoparte } from "../Model/AutoparteModel.js";

// Controlador para obtener todas las autopartes
const getAllA = async (req, res) => {
    try {
        const autopartes = await getAllAutopartes();
        res.json(autopartes);
    } catch (error) {
        // Enviar un estado 500 si ocurre un error en el servidor
        res.status(500).json({ message: error.message });
    }
};

// Controlador para agregar una nueva autoparte
const addAuto = async (req, res) => {
    try {
        // Validar que el cuerpo de la solicitud tenga los campos requeridos
        const { Id, Nombre } = req.body;
        if (!Id || !Nombre) {
            return res.status(400).json({ message: 'Id y Nombre son obligatorios' });
        }

        // Llamar a la función del modelo para crear la autoparte
        await createAutoparte(req.body);
        res.status(201).json({ message: 'Datos insertados correctamente' });

    } catch (error) {
        // Capturar errores y enviar un estado 500 con el mensaje de error
        res.status(500).json({ message: error.message });
    }
};

export { getAllA, addAuto };
