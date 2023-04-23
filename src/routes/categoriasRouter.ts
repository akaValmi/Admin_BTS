import express from "express";
import { agregarCategoria, obtenerCategorias } from "../controllers/categoriaController";

const router = express.Router();

router.post("/registroCategorias", agregarCategoria);

router.get("/", obtenerCategorias);

export default router;