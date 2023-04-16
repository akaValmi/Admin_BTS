import { Request, Response } from "express";
import Repartidor from "../models/repartidorModel";

// Controlador para agregar un nuevo repartidor
const agregarRepartidor = async (req: Request, res: Response) => {
  try {
    const { nombre, correo, contraseña, telefono } = req.body;

    // Crear un nuevo documento de repartidor con los datos del formulario
    const nuevoRepartidor = new Repartidor({
      nombre,
      correo,
      contraseña,
      telefono,
    });

    // Guardar el nuevo documento de repartidor en la base de datos
    await nuevoRepartidor.save();

    res.status(201).send("Repartidor agregado exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al agregar repartidor");
  }
};

export { agregarRepartidor };
