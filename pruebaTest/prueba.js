    class Producto {
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
            if (this.#cantidadBodega >= this.#cantidadMinimaBodega) {
                return true;
            }
            return false;
        };
        calcularValorPagar(unidadesCompra) {
            return this.#precioCompra * unidadesCompra;
        };
        calcularPorcentajeGanancia() {
            return ((this.precioVenta - this.precioCompra) / this.precioCompra) * 100;
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
    }

    let cont=0;
    body="";
    tarjeta="";
    datos=[];
    let cantidadPrendas=0;
    let cantidadCalzado=0;
    let cantidadPedidosProveedor = 0;
    let codigosPedidosProveedor = [];


    function agregar1(){
        let codigo = document.getElementById("codigo").value;
        let descripcion = document.getElementById("descripcion").value;
        let talla = document.getElementById("talla").value;
        let planchado = document.getElementById("planchado").value;
        let precioCon = document.getElementById("precioCon").value;
        let precioVen = document.getElementById("precioVen").value;
        let cantidad = document.getElementById("cantidad").value;
        let cantidadMinima = document.getElementById("cantidadMin").value;
        let cantidadMaxima = document.getElementById("cantidadMax").value;
        let porcentaje = document.getElementById("descuento").value;
        if(descripcion === "prenda"){
            cantidadPrendas++
            // Crear instancia de la clase PrendaVestir
            let prenda = new PrendaVestir(codigo, descripcion, precioCon, precioVen, cantidad, cantidadMinima, cantidadMaxima, porcentaje, talla, planchado);
            body += `<div class="card text-white bg-danger mb-3 ms-3" style="max-width: 18rem;">
            <div class="card-header">codigo del producto: ${codigo}</div>
            <div class="card-body">
            <p class="card-text">Descripcion: ${descripcion}</p>
            <p class="card-text">talla: ${talla.toUpperCase()}</p>
            <p class="card-text">Planchado: ${planchado}</p>
            <p class="card-text">Precio compra $${precioCon}</p>
            <p class="card-text">Precio venta $${precioVen}</p>
            <p class="card-text">Cantidad en bodega: ${cantidad}</p>
            <p class="card-text">Cantidad minima en bodega: ${cantidad}</p>
            <p class="card-text">Cantidad minima en maxima: ${cantidad}</p>
            <p class="card-text">cantidad de productos: ${cont}</p>
            </div>
        </div>`;
            }else{
                cantidadCalzado++;
                if (cantidad <= cantidadMinima) {
                    // Incrementar la cantidad de productos que requieren pedidos al proveedor
                    cantidadPedidosProveedor++;
                    // Almacenar el código del producto que requiere pedido al proveedor
                    codigosPedidosProveedor.push(codigo);
                }
                let calzado = new Calzado(codigo, descripcion, precioCon, precioVen, cantidad, cantidadMinima, cantidadMaxima, porcentaje, talla);
                body += `<div class="card text-white bg-success mb-3 ms-3" style="max-width: 18rem;">
                <div class="card-header">codigo del producto: ${codigo}</div>
                <div class="card-body">
                <p class="card-text">Descripcion: ${descripcion}</p>
                <p class="card-text">talla: ${talla}</p>
                <p class="card-text">Precio compra${precioCon}</p>
                <p class="card-text">Precio venta${precioVen}</p>
                <p class="card-text">Cantidad en bodega${cantidad}</p>
                <p class="card-text">Cantidad minima en bodega${cantidad}</p>
                <p class="card-text">cantidad de productos: ${cont}</p>
                </div>
                </div>`;
            };
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
        document.getElementById("datoss").innerHTML = body;
    
        tarjeta = `<div class="card text-white bg-danger mb-3 ms-3" style="max-width: 18rem;">
        <div class="card-header">cantidad de productos: ${cont}</div>
        <div class="card-body">
        <p class="card-text">cantidad de prendas de vestir: ${cantidadPrendas}</p>
        <p class="card-text">cantidad de pedidos al provedor: ${talla.toUpperCase()}</p>
        <p class="card-text">calzado con mayor talla: codigo:${codigo} talla:${talla}</p>
        </div>
        </div>`;
        document.getElementById("tarjeta").innerHTML = tarjeta;
        // Restablecer los valores de los campos a vacío
        document.getElementById("descripcion").value = "";
        document.getElementById("codigo").value = "";
        document.getElementById("planchado").value = "";
        document.getElementById("precioCon").value = "";
        document.getElementById("precioVen").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("cantidadMin").value = "";
        document.getElementById("cantidadMax").value = "";
        document.getElementById("descuento").value = "";
        document.getElementById("talla").value = "";
    };
    function mostrarCampoAdicional() {
        let option = document.getElementById("descripcion").value;
        let planchado = document.getElementById("planchado");
        let talla = document.getElementById("talla");
        if (option === "prenda") {
            planchado.style.display = "block";
            // talla.inputElement.type = "text";
        } else {
            planchado.style.display = "none";
            talla.inputElement.type = "number"
        }
    };
    
