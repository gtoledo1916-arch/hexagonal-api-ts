import { ProductoRepository } from "../domain/repositories/ProductoRepository";
import { Producto } from "../domain/entities/Producto";

export class RegistrarProductoUseCase {
  constructor(private productoRepository: ProductoRepository) {}

  async ejecutar(nombre: string, stock: number, precio: number): Promise<void> {
    const producto = new Producto(null, nombre, stock, precio);
    await this.productoRepository.guardar(producto);
  }
}
