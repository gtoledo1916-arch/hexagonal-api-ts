import { Venta } from "../entities/Venta";

export interface VentaRepository {
  guardar(venta: Venta): Promise<void>;
}
