import express from "express";
import { agregarProductos, obtenerProductos } from "../controllers/productoController";

const router = express.Router();

router.post("/registroProductos", agregarProductos);
router.get("/", obtenerProductos);

export default router;