class bodega {
    constructor(codigo1, precio1, cantidad1, cantidadmini1) {
        this._codigo = codigo1;
        this._precio = precio1;
        this._cantidad = cantidad1;
        this._cantidamini = cantidadmini1;
    }
    set codigo(nuevoCodigo) {
        this._codigo = nuevoCodigo;
    };
    get codigo() {// para traer el datos
        return this._codigo;

    };
    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    };
    get precio() {
        return this._precio;
    };
    set cantidad(nuevaCantidad) {
        this._cantidad = nuevaCantidad;
    }
    get cantidad() {
        return this._cantidad;
    };
    set cantidamini(nuevaCantidamini) {
        this._cantidamini = nuevaCantidamini;
    };
    get cantidamini() {
        return this._cantidamini;
    };
    solicitudPedido() {
        if (this.cantidad <= this.cantidamini) {
            return true;
        } else {
            return false;
        }
    };
}
const productos = [];
tarjeta = "";
function almacenar() {
    codigo1 = document.getElementById("codigo").value;
    precio1 = document.getElementById("precio").value;
    cantida1 = document.getElementById("cantidad").value;
    cantidadmini1 = document.getElementById("mini").value;
    const producto = new bodega(codigo1, precio1, cantida1, cantidadmini1);
    productos.push(codigo1, precio1, cantida1, cantidadmini1);
    fecha = new Date();

    //crear tarjeta con datos de producto


    if (producto.solicitudPedido()) {
        tarjeta += `<div class="card text-center" style="background-color: rgb(226, 109, 109)">
        <div class="card-header">
        Bodega Campus..
        </div>
        <div class="card-body">
        <h5 class="card-title">codigo del producto # ${codigo1}</h5>
        <p class="card-text">tiene ${cantida1} popquito stock Contacta tu Provedor!!</p>
        </div>
        <div class="card-footer text-muted">
        ${fecha}
        </div></div>`;
        document.getElementById("tarjeta").innerHTML = tarjeta;
    } else {
        tarjeta += `<div class="card text-center" style="background-color: green">
        <div class="card-header">
        Bodega Campus..
        </div>
        <div class="card-body">
        <h5 class="card-title">codigo del producto # ${codigo1}</h5>
        <p class="card-text">tiene ${cantida1} buena cantidad !!</p>
        </div>
        <div class="card-footer text-muted">
        ${fecha}
        </div></div>`;
        document.getElementById("tarjeta").innerHTML = tarjeta;
    }


}
