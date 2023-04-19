import express from "express";
import { agregarCategoria } from "../controllers/categoriaController";

const router = express.Router();

router.post("/registroCategorias", agregarCategoria);

export default router;