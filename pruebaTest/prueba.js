class Producto {
    #codigo;
    #descripcion;
    #precioCompra;
    #precioVenta;
    #cantidadBodega;
    #cantidadMinimaBodega;
    #cantidadMaximaInventario;
    #porcentajeDescuento;
    constructor(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento) {
        this.#codigo = codigo;
        this.#descripcion = descripcion;
        this.#precioCompra = precioCompra;
        this.#precioVenta = precioVenta;
        this.#cantidadBodega = cantidadBodega;
        this.#cantidadMinimaBodega = cantidadMinimaBodega;
        this.#cantidadMaximaInventario = cantidadMaximaInventario;
        this.#porcentajeDescuento = porcentajeDescuento;
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
        if (this.#cantidadBodega >= this.#cantidadMinimaBodega) {
            return true;
        }
        return false;
    };
    calcularValorPagar(unidadesCompra) {
        return this.#precioCompra * unidadesCompra;
    };
}

class PrendaVestir extends Producto {
    #talla;
    #planchado;
    constructor(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento,talla,planchado) {
        super(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento);
        this.#talla = talla;
        this.#planchado = planchado;
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
    
}
class Calzado extends Producto {
    #talla;
    constructor(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento,talla) {
        super(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento);
        this.#talla = talla;
    };
    set talla(talla) {
        this.#talla = talla;
    };
    get talla() {
        return this.#talla;
    };
    planchado(){

    }
}

let cont=0;
body="";
tarjeta="";
datos=[];
cantidadPrendas=0;
let meyor = { cantida1: -Infinity };


function agregar1(){
    let codigo = document.getElementById("codigo").value;
    let descripcion = document.getElementById("descri").value;
    let talla = document.getElementById("talla").value;
    let precioCon = document.getElementById("precioCon").value;
    let precioVen = document.getElementById("precioVen").value;
    let cantidad = document.getElementById("cantidad").value;
    let cantidadMinima = document.getElementById("cantidadMin").value;
    let cantidadMaxima = document.getElementById("cantidadMax").value;
    let porcentaje = document.getElementById("descuento").value;
    if(descripcion === "prenda")cantidadPrendas++;
    datos.push({
        codigo: codigo,
        descripcion: descripcion,
        talla: talla,
        precioCon: precioCon,
        precioVen:precioVen,
        cantidadt : cantidad,
        cantidadMinima : cantidadMinima,
        cantidadMaxima : cantidadMaxima,
        porcentaje : porcentaje
    });
    cont++;
    body += `<tr><td>${cont}</td><td>${codigo}</td><td>${descripcion}</td><td>${talla}</td><td>${precioCon}</td><td>${precioVen}</td><td>${cantidad}</td><td>${cantidadMinima}</td><td>${cantidadMaxima}</td><td>${porcentaje}</td></tr>`
    document.getElementById("datostabla").innerHTML = body;
    console.log(datos);
    datos.forEach(el => meyor = el.datos < meyor.cantidadt ? el : meyor);
    console.log(meyor);
    tarjeta = `<div class="card text-white bg-danger mb-3 ms-3" style="max-width: 18rem;">
    <div class="card-header">cantidad de productos: ${cont}</div>
    <div class="card-body">
    <p class="card-text">cantidad de prendas de vestir: ${cantidadPrendas}</p>
    <p class="card-text">cantidad de pedidos al provedor${talla}</p>
    <p class="card-text">calzado con mayor talla: codigo:${codigo} talla:</p>
    </div>
</div>`;
}

// if (descripcion === "prenda"){
//     let des = new PrendaVestir(talla);
//     return des;
// }else { 
//     let des = new Calzado(talla);
//     return des;
// }