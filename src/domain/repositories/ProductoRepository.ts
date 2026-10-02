import { Producto } from "../entities/Producto";

export interface ProductoRepository {
  guardar(producto: Producto): Promise<void>;
  buscarPorId(id: number): Promise<Producto | null>;
  actualizar(producto: Producto): Promise<void>;
  obtenerProductos(): Promise<Producto[]>;
}
