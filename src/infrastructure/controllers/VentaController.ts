import { Request, Response, NextFunction } from "express";
import { RegistrarVentaUseCase } from "../../application/RegistrarVentaUseCase";

class VentaController {
  constructor(private registrarVentaUseCase: RegistrarVentaUseCase) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { productoId, cantidad } = req.body;
      await this.registrarVentaUseCase.ejecutar(productoId, cantidad);
      res.status(201).json({ message: "Venta registrada exitosamente" });
    } catch (error) {
      next(error);
    }
  }
}

export default VentaController;