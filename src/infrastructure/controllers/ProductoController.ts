import { Request, Response, NextFunction } from "express";
import { RegistrarProductoUseCase } from "../../application/RegistrarProductoUseCase";
import { ObtenerProductoUseCase } from "../../application/ObtenerProductosUseCase";

class ProductoController {
  constructor(
    private registrarProductoUseCase: RegistrarProductoUseCase,
    private obtenerProductoUseCase: ObtenerProductoUseCase
  ) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { nombre, stock, precio } = req.body;
      await this.registrarProductoUseCase.ejecutar(nombre, stock, precio);
      res.status(201).json({ message: "Producto registrado exitosamente" });
    } catch (error) {
      next(error);
    }
  }

  async obtenerProductos(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        console.log(req.params)
      const recommendations = await this.obtenerProductoUseCase.ejecutar();
      res.json(recommendations);
    } catch (error) {
      next(error);
    }
  }
}

export default ProductoController;