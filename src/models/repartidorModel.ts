import mongoose, { Document, Model } from "mongoose";

// Interfaz para el modelo de repartidor
interface IRepartidor extends Document {
  nombre: string;
  correo: string;
  contraseña: string;
  telefono: string;
}

// Esquema para el modelo de repartidor
const RepartidorSchema = new mongoose.Schema<IRepartidor>({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  contraseña: { type: String, required: true },
  telefono: { type: String, required: true },
});

// Exportar el modelo de repartidor
const Repartidor: Model<IRepartidor> = mongoose.model("Repartidor", RepartidorSchema);
export default Repartidor;
