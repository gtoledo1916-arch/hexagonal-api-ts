import { query } from "../../database/mysql";
import { Venta } from "../../domain/entities/Venta";
import { VentaRepository } from "../../domain/repositories/VentaRepository";

export class MySQLVentaRepository implements VentaRepository {
    async guardar(venta: Venta): Promise<void> {
        const sql = `
        INSERT INTO ventas (producto_id, cantidad, total)
        VALUES (?, ?, ?)
        `;
        const params = [
            venta.productoId,
            venta.cantidad,
            venta.total
        ];

        try {
            await query(sql, params);
        } catch (error: any) {
            console.error("Error al guardar venta: ", error.message);
            throw error;
        }
    }
}
