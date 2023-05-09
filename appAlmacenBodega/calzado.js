
export class Calzado extends Producto {
    #talla;
    static contadorC =0;
    constructor(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento,talla) {
        super(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento);
        this.#talla = talla;
        ++Calzado.contadorC;
    };
    set talla(talla) {
        this.#talla = talla;
    };
    get talla() {
        return this.#talla;
    };
    mostrar(soli,totalPagar){
        body += `<div id="color" class="card text-dark ${soli ? 'bg-white' : 'bg-secondary' } mb-3 ms-3" style="max-width: 18rem;">
            <div class="card-header">codigo del producto: ${this.codigo}</div>
            <div class="card-body">
            <p class="card-text">Descripcion: ${this.descripcion}</p>
            <p class="card-text">talla: ${this.talla}</p>
            <p class="card-text">Precio compra $${this.precioCompra}</p>
            <p class="card-text">Precio venta $${this.precioVenta}</p>
            <p class="card-text">Cantidad en bodega${this.cantidadBodega}</p>
            <p class="card-text">Cantidad minima en bodega: ${this.cantidadMinimaBodega}</p>
            <p class="card-text">Cantidad minima en maxima: ${this.cantidadMaximaInventario}</p>
            <p class="card-text">Poorcentaje de descuento: ${this.porcentajeDescuento}</p>
            <p class="card-text">TOTAL a pagar: $${totalPagar}</p>
            </div>
        </div>`;
    }
    solicitarPedido() {
        return this.cantidadBodega >= this.cantidadMinimaBodega
    };
};