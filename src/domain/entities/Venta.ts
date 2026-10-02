export class Venta {
    id: number | null;
    productoId: number;
    cantidad: number;
    total: number;

    constructor(id: number | null, productoId: number, cantidad: number, precioUnitario: number) {
        this.id = id;
        this.productoId = productoId;
        this.cantidad = cantidad;
        this.total = cantidad * precioUnitario;
    }
}
