import { ProductoRepository } from "../domain/repositories/ProductoRepository";
import { VentaRepository } from "../domain/repositories/VentaRepository";
import { Venta } from "../domain/entities/Venta";

export class RegistrarVentaUseCase {
  constructor(
    private productoRepository: ProductoRepository,
    private ventaRepository: VentaRepository
  ) {}

  async ejecutar(productoId: number, cantidad: number): Promise<void> {
    const producto = await this.productoRepository.buscarPorId(productoId);
    if (!producto) throw new Error("Producto no encontrado");

    if (!producto.reducirStock(cantidad)) {
      throw new Error("Stock insuficiente");
    }

    const venta = new Venta(null, productoId, cantidad, producto.precio);
    await this.productoRepository.actualizar(producto);
    await this.ventaRepository.guardar(venta);
  }
}
