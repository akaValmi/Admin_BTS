import express from "express";
import { agregarRepartidor, obtenerRepartidores } from "../controllers/repartidorController";

const router = express.Router();

// Ruta para agregar un nuevo repartidor
router.post("/registroRepartidores", agregarRepartidor);
router.get("/", obtenerRepartidores);

export default router;
