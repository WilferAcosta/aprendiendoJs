
export class PrendaVestir extends Producto {
    #talla;
    #planchado;
    static contadorV = 0;
    constructor(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento,talla,planchado) {
        super(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento);
        this.#talla = talla;
        this.#planchado = planchado;
        ++PrendaVestir.contadorV;
    };
    set talla(talla) {
        this.#talla = talla;
    };
    get talla() {
        return this.#talla;
    };
    set planchado(planchado) {
        this.#planchado = planchado;
    };
    get planchado() {
        return this.#planchado;
    };
    mostrar(soli,totalPagar){
        body += `<div id="color" class="card text-dark ${soli ? 'bg-white' : 'bg-secondary' } mb-3 ms-3" style="max-width: 18rem;">
        <div class="card-header">codigo del producto: ${this.codigo}</div>
        <div class="card-body">
        <p class="card-text">Descripcion: ${this.descripcion}</p>
        <p class="card-text">talla: ${this.talla.toUpperCase()}</p>
        <p class="card-text">Planchado: ${this.planchado}</p>
        <p class="card-text">Precio compra $${this.precioCompra}</p>
        <p class="card-text">Precio venta $${this.precioVenta}</p>
        <p class="card-text">Cantidad en bodega: ${this.cantidadBodega}</p>
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