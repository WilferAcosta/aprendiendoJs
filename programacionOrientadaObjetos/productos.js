class Producto {
    #codigo;
    #descripcion;
    #precioCompra;
    #precioVenta;
    #cantidadBodega;
    #cantidadMinimaBodega;
    #cantidadMaximaInventario;
    #porcentajeDescuento;

    constructor(
        codigo,
        descripcion,
        precioCompra,
        precioVenta,
        cantidadBodega,
        cantidadMinimaBodega,
        cantidadMaximaInventario,
        porcentajeDescuento
    ) {
        this.#codigo = codigo;
        this.#descripcion = descripcion;
        this.#precioCompra = precioCompra;
        this.#precioVenta = precioVenta;
        this.#cantidadBodega = cantidadBodega;
        this.#cantidadMinimaBodega = cantidadMinimaBodega;
        this.#cantidadMaximaInventario = cantidadMaximaInventario;
        this.#porcentajeDescuento = porcentajeDescuento;
    }
    set codigo(codigo) {
        this.#codigo = codigo;
    }
    get codigo() {
        return this.#codigo;
    }
    set descripcion(descripcion) {
        this.#descripcion = descripcion;
    }
    get descripcion() {
        return this.#descripcion;
    }
    set precioCompra(precioCompra) {
        this.#precioCompra = precioCompra;
    }
    get precioCompra() {
        return this.#precioCompra;
    }
    set precioVenta(precioVenta) {
        this.#precioVenta = precioVenta;
    }
    get precioVenta() {
        return this.#precioVenta;
    }
    set cantidadBodega(cantidadBodega) {
        this.#cantidadBodega = cantidadBodega;
    }
    get cantidadBodega() {
        return this.#cantidadBodega;
    }
    set cantidadMinimaBodega(cantidadMinimaBodega) {
        this.#cantidadMinimaBodega = cantidadMinimaBodega;
    }
    get cantidadMinimaBodega() {
        return this.#cantidadMinimaBodega;
    }
    set cantidadMaximaInventario(cantidadMaximaInventario) {
        this.#cantidadMaximaInventario = cantidadMaximaInventario;
    }
    get cantidadMaximaInventario() {
        return this.#cantidadMaximaInventario;
    }
    set porcentajeDescuento(porcentajeDescuento) {
        this.#porcentajeDescuento = porcentajeDescuento;
    }
    get porcentajeDescuento() {
        return this.#porcentajeDescuento;
    }

    solicitarPedido() {
        if (this.#cantidadBodega >= this.#cantidadMinimaBodega) {
            return true;
        }
        return false;
    }
    calcularValorPagar(unidadesCompra) {
        return this.#precioCompra * unidadesCompra;
    }
}

class PrendaVestir extends Producto {
    #talla;
    #planchado;
    constructor(
        codigo,
        descripcion,
        precioCompra,
        precioVenta,
        cantidadBodega,
        cantidadMinimaBodega,
        cantidadMaximaInventario,
        porcentajeDescuento,
        talla,
        planchado
    ) {
        super(
            codigo,
            descripcion,
            precioCompra,
            precioVenta,
            cantidadBodega,
            cantidadMinimaBodega,
            cantidadMaximaInventario,
            porcentajeDescuento
        );
        this.#talla = talla;
        this.#planchado = planchado;
    }
    //setters and getters
    set talla(talla) {
        this.#talla = talla;
    }
    get talla() {
        return this.#talla;
    }
    set planchado(planchado) {
        this.#planchado = planchado;
    }
    get planchado() {
        return this.#planchado;
    }
    
}
class Calzado extends Producto {
    #talla;
    constructor(
        codigo,
        descripcion,
        precioCompra,
        precioVenta,
        cantidadBodega,
        cantidadMinimaBodega,
        cantidadMaximaInventario,
        porcentajeDescuento,
        talla
    ) {
        super(
            codigo,
            descripcion,
            precioCompra,
            precioVenta,
            cantidadBodega,
            cantidadMinimaBodega,
            cantidadMaximaInventario,
            porcentajeDescuento
        );
        this.#talla = talla;
        this.#planchado = planchado;
    }
    set talla(talla) {
        this.#talla = talla;
    }
    get talla() {
        return this.#talla;
    }
}
