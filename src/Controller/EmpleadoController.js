import { json } from "express";
import { getAllEmpleados } from "../Model/EmpleadoModel.js";


const getAllE = async (req, res) => {
    try {

        const empleados = await getAllEmpleados();
        res.json(empleados);

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

export { getAllE }