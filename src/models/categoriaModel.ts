import mongoose, { Document, Model } from "mongoose";


interface Categoria extends Document {
  nombreCategoria: string;
}

const CategoriaSchema = new mongoose.Schema<Categoria>({
  nombreCategoria: { type: String, required: true }
});

const Categoria: Model<Categoria> = mongoose.model("Categoria", CategoriaSchema);
export default Categoria;
