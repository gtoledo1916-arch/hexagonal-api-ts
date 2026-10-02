import { Router } from "express";
import { productoController } from "../dependencies";

const productoRouter = Router();

productoRouter.post("/", productoController.create.bind(productoController));
productoRouter.get("/", productoController.obtenerProductos.bind(productoController));

export default productoRouter;