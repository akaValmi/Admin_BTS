import { Request, Response } from "express";
import Categoria from "../models/categoriaModel";

// Controlador para agregar un nuevo repartidor
const agregarCategoria = async (req: Request, res: Response) => {
  try {
    const {  nombreCategoria } = req.body;
    const ultimaCategoria = await Categoria.findOne().sort('-id').exec();
 
    // Crear un nuevo documento de repartidor con los datos del formulario
    const nuevaCategoria = new Categoria({
      nombreCategoria,
      //id : ultimaCategoria ? ultimaCategoria.id + 1 : 1,
      Productos: []
    });
    
    // Guardar el nuevo documento de repartidor en la base de datos
    await nuevaCategoria.save();

    res.status(201).send("Categoria agregada exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al agregar Categoria");
  }
};

export { agregarCategoria };
