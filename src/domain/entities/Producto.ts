export class Producto {
    id: number | null;
    nombre: string;
    stock: number;
    precio: number;

    constructor(id: number | null, nombre: string, stock: number, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }

    reducirStock(cantidad: number): boolean {
        if (this.stock - cantidad < 0) {
            return false;
        }
        this.stock -= cantidad;
        return true;
    }
}
