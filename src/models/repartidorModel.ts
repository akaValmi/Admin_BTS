import mongoose, { Document, Model } from "mongoose";

// Interfaz para el modelo de repartidor
interface Repartidor extends Document {
  //id: number;
  nombre: string;
  correo: string;
  contraseña: string;
  telefono: string;
}

// Esquema para el modelo de repartidor
const RepartidorSchema = new mongoose.Schema<Repartidor>({
  //id:{type: Number}, 
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  contraseña: { type: String, required: true },
  telefono: { type: String, required: true },
});

// Exportar el modelo de repartidor
const Repartidor: Model<Repartidor> = mongoose.model("Repartidor", RepartidorSchema);
export default Repartidor;
