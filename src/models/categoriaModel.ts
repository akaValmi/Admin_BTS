import mongoose, { Document, Model } from "mongoose";


interface Categoria extends Document {
  //id: number;
  nombreCategoria: string;
}

const CategoriaSchema = new mongoose.Schema<Categoria>({
  //id: { type: Number, unique: true },
  nombreCategoria: { type: String, required: true },

});

const Categoria: Model<Categoria> = mongoose.model("Categoria", CategoriaSchema);
export default Categoria;
