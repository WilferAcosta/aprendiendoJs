
export class Producto {
    #codigo;
    #descripcion;
    #precioCompra;
    #precioVenta;
    #cantidadBodega;
    #cantidadMinimaBodega;
    #cantidadMaximaInventario;
    #porcentajeDescuento;
    static contador =0;
    constructor(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento) {
        this.#codigo = codigo;
        this.#descripcion = descripcion;
        this.#precioCompra = precioCompra;
        this.#precioVenta = precioVenta;
        this.#cantidadBodega = cantidadBodega;
        this.#cantidadMinimaBodega = cantidadMinimaBodega;
        this.#cantidadMaximaInventario = cantidadMaximaInventario;
        this.#porcentajeDescuento = porcentajeDescuento;
        ++Producto.contador;
    };
    set codigo(codigo) {
        this.#codigo = codigo;
    };
    get codigo() {
        return this.#codigo;
    };
    set descripcion(descripcion) {
        this.#descripcion = descripcion;
    };
    get descripcion() {
        return this.#descripcion;
    };
    set precioCompra(precioCompra) {
        this.#precioCompra = precioCompra;
    };
    get precioCompra() {
        return this.#precioCompra;
    };
    set precioVenta(precioVenta) {
        this.#precioVenta = precioVenta;
    };
    get precioVenta() {
        return this.#precioVenta;
    };
    set cantidadBodega(cantidadBodega) {
        this.#cantidadBodega = cantidadBodega;
    };
    get cantidadBodega() {
        return this.#cantidadBodega;
    };
    set cantidadMinimaBodega(cantidadMinimaBodega) {
        this.#cantidadMinimaBodega = cantidadMinimaBodega;
    };
    get cantidadMinimaBodega() {
        return this.#cantidadMinimaBodega;
    };
    set cantidadMaximaInventario(cantidadMaximaInventario) {
        this.#cantidadMaximaInventario = cantidadMaximaInventario;
    };
    get cantidadMaximaInventario() {
        return this.#cantidadMaximaInventario;
    };
    set porcentajeDescuento(porcentajeDescuento) {
        this.#porcentajeDescuento = porcentajeDescuento;
    };
    get porcentajeDescuento() {
        return this.#porcentajeDescuento;
    };

    solicitarPedido() {
        
    };
    calcularValorPagar() {
        return this.#precioCompra * this.#cantidadBodega;
    };
    calcularPorcentajeGanancia() {
        let ventaR = 0;
        ventaR = (this.#precioVenta) - (this.#precioVenta*this.#porcentajeDescuento)/100;
        console.log(ventaR);
        return ((ventaR - this.#precioCompra) / this.#precioCompra)*100;
    };
    mostrar(){

    }
    
};