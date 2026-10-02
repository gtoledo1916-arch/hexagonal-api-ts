import { query } from "../../database/mysql";
import { Producto } from "../../domain/entities/Producto";
import { ProductoRepository } from "../../domain/repositories/ProductoRepository";

export class MySQLProductoRepository implements ProductoRepository {
    async guardar(producto: Producto): Promise<void> {
        const sql = `
        INSERT INTO productos (nombre, stock, precio)
        VALUES (?, ?, ?)
        `;
        const params = [
            producto.nombre,
            producto.stock,
            producto.precio
        ];

        try {
            await query(sql, params);
        } catch (error: any) {
            console.error("Error al guardar producto: ", error.message);
            throw error;
        }
    }

    async buscarPorId(id: number): Promise<Producto | null> {
        const sql = `SELECT * FROM productos WHERE id = ?`;
        const params = [id];

        try {
            const [rows] = (await query(sql, params)) as any[];
            if (rows.length === 0) return null;
            const row = rows[0];
            return new Producto(row.id, row.nombre, row.stock, row.precio);
        } catch (error: any) {
            console.error("Error al buscar producto por ID: ", error.message);
            throw error;
        }
    }

    async actualizar(producto: Producto): Promise<void> {
        const sql = `UPDATE productos SET nombre = ?, stock = ?, precio = ? WHERE id = ?`;
        const params = [
            producto.nombre,
            producto.stock,
            producto.precio,
            producto.id
        ];

        try {
            await query(sql, params);
        } catch (error: any) {
            console.error("Error al actualizar producto: ", error.message);
            throw error;
        }
    }

    async obtenerProductos(): Promise<Producto[]> {
        const sql = `SELECT * FROM productos`;

        try {
            const [rows] = (await query(sql, [])) as any[];
            return rows.map((row: any) => this.mapToProduct(row));
        } catch (error: any) {
            console.error("Error al obtener los productos: ", error.message);
            throw error;
        }
    }

    private mapToProduct(row: any): Producto {
        return new Producto(
            row.id,
            row.nombre,
            row.stock,
            row.precio,
        );
    }
}