import { Router } from "express";
import { ventaController } from "../dependencies";

const ventaRouter = Router();

ventaRouter.post("/", ventaController.create.bind(ventaController));

export default ventaRouter;