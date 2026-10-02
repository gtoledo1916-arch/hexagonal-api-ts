import { Producto } from "../domain/entities/Producto";
import { ProductoRepository } from "../domain/repositories/ProductoRepository";

export class ObtenerProductoUseCase {
  constructor(private productoRepository: ProductoRepository) {}

  async ejecutar(): Promise<Producto[]> {
    return await this.productoRepository.obtenerProductos();
  }
}
