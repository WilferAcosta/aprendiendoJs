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
    menorProducto(){
        let menor = { cantida1: Infinity };
        productos.forEach(el => menor = el.cantida1 < menor.cantida1 ? el : menor )
        console.log('hola  ', menor);
    }
}
const productos = [];
tarjeta = "";
console.log(productos);
function almacenar() {
    codigo1 = document.getElementById("codigo").value;
    precio1 = document.getElementById("precio").value;
    cantida1 = document.getElementById("cantidad").value;
    cantidadmini1 = document.getElementById("mini").value;
    const producto = new bodega(codigo1, precio1, cantida1, cantidadmini1);
    productos.push({
        codigo: codigo1,
        precio1: precio1,
        cantida1: cantida1,
        cantidadmini1: cantidadmini1
    });
    fecha = new Date();
    producto.menorProducto();
    //crear tarjeta con datos de producto

    if (producto.solicitudPedido()) {
        tarjeta += `<div class="card text-white bg-danger mb-3 ms-3" style="max-width: 18rem;">
        <div class="card-header">Codigo del Producto: ${codigo1}</div>
        <div class="card-body">
        <h5 class="card-title">tiene $${cantida1} buena cantidad !!.</h5>
        <p class="card-text">${fecha}</p>
        </div>
    </div>`;
        document.getElementById("tarjeta").innerHTML = tarjeta;
    } else {
        tarjeta += `<div class="card text-white bg-success mb-3 ms-3" style="max-width: 18rem;">
        <div class="card-header">Codigo del Producto: ${codigo1}</div>
        <div class="card-body">
        <h5 class="card-title">tiene $${cantida1} buena cantidad !!.</h5>
        <p class="card-text">${fecha}</p>
        </div>
    </div>`;
        document.getElementById("tarjeta").innerHTML = tarjeta;
    }


}