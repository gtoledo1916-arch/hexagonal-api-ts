import { ObtenerProductoUseCase } from "../application/ObtenerProductosUseCase";
import { RegistrarProductoUseCase } from "../application/RegistrarProductoUseCase";
import { RegistrarVentaUseCase } from "../application/RegistrarVentaUseCase";
import ProductoController from "./controllers/ProductoController";
import VentaController from "./controllers/VentaController";
import { MySQLProductoRepository } from "./repositories/MysqlProductoRepository";
import { MySQLVentaRepository } from "./repositories/MysqlVentaRepository";

const productoRepository = new MySQLProductoRepository();
const ventaRepository = new MySQLVentaRepository();

const registrarProductoUseCase = new RegistrarProductoUseCase(productoRepository);
const obtenerProductoUseCase = new ObtenerProductoUseCase(productoRepository);
const registrarVentaUseCase = new RegistrarVentaUseCase(productoRepository, ventaRepository);

export const productoController = new ProductoController(registrarProductoUseCase, obtenerProductoUseCase);
export const ventaController = new VentaController(registrarVentaUseCase);