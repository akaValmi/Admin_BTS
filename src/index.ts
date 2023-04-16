import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import repartidoresRouter from './routes/repartidoresRouter';
const app = express();
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
  
  mongoose.connect("mongodb+srv://admin:1234@bts.8famhto.mongodb.net/repartidores",)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));


  app.use('/', repartidoresRouter);



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

