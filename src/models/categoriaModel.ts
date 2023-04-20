import mongoose, { Document, Model } from "mongoose";


interface Productos extends Document {
  nombre: string;
  descripcion: string;
  precio: number;
}

interface Categoria extends Document {
  //id: number;
  nombreCategoria: string;
  productos: Productos[];
}

const CategoriaSchema = new mongoose.Schema<Categoria>({
  //id: { type: Number, unique: true },
  nombreCategoria: { type: String, required: true },
  productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }]
});

const Categoria: Model<Categoria> = mongoose.model("Categoria", CategoriaSchema);
export default Categoria;
