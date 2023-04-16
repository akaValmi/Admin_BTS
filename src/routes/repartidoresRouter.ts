import express from "express";
import { agregarRepartidor } from "../controllers/repartidorController";

const router = express.Router();

// Ruta para agregar un nuevo repartidor
router.post("/registroRepartidores", agregarRepartidor);

export default router;
