import { Request, Response } from "express";
import Productos from "../models/productoModel";

// Controlador para agregar un nuevo repartidor
const agregarProductos = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, precio } = req.body;

    // Crear un nuevo documento de repartidor con los datos del formulario
    const nuevoProductos = new Productos({
      nombre,
      descripcion,
        precio,
    });

    // Guardar el nuevo documento de repartidor en la base de datos
    await nuevoProductos.save();

    res.status(201).redirect('http://127.0.0.1:5500/public/categorias.html');

  } catch (error) {
    console.error(error);
    res.status(500).send("Error al agregar repartidor");
  }
};

export { agregarProductos };



const obtenerProductos = async (req: Request, res: Response) => {
  try {
    const productos = await Productos.find({});
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los repartidores');
  }
};

export { obtenerProductos };