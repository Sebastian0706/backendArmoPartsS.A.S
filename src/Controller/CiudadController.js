import { json } from "express";
import { getAllAutopartes } from "../Model/AutoparteModel.js";
const getAllA = async(req , res) =>{
try {
    
    const autopartes = await getAllAutopartes();
    res.json(autopartes);

} catch (error) {
    res.status(500).json({message: error.message})

}
}

export {getAllA}