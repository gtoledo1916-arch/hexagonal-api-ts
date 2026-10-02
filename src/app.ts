import express, { Application } from 'express';
import morgan from 'morgan';
import { Signale } from "signale";
import cors from 'cors';
import config from './config/config';
import ventaRouter from './infrastructure/routes/VentaRouter';
import productoRouter from './infrastructure/routes/ProductoRouter';

const app: Application = express();
const signale = new Signale();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const port = config.port;

app.use('/productos', productoRouter);
app.use('/ventas', ventaRouter);

app.listen(port, () => {
  signale.success(`Server listen on http://localhost:${port}`);
});
