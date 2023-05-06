import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import repartidoresRouter from './routes/repartidoresRouter';
import categoriasRouter from './routes/categoriasRouter';
import productosRouter from './routes/productosRouter';

import dotenv from 'dotenv';
import cors from 'cors';
import Repartidor from "./models/repartidorModel";
import Categoria from "./models/categoriaModel";


const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



/*conectao a ts*/
const dbOptions = {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  dotenv.config();
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));



  app.use('/repartidores', repartidoresRouter);
  app.use('/categorias', categoriasRouter);
  app.use('/productos', productosRouter);

 /* app.get('/repartidores', async (req, res) => {
    try {
      const repartidors = await Repartidor.find({});
      res.json(repartidors);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los repartidores');
    }
  });
  
  app.get('/categorias/:id', async (req, res) => {
    try {
      const categoria = await Categoria.findById(req.params.id);
      res.json(categoria);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener el categoria');
    }
  });
*/
  


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

