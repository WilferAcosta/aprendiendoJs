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
            
        };
        calcularValorPagar(unidadesCompra) {
            return this.#precioCompra * unidadesCompra;
        };
        calcularPorcentajeGanancia() {
            return ((this.precioVenta - this.precioCompra) / this.precioCompra) * 100;
        };
        mostrar(){

        }
        
    }cantidadMax

    class PrendaVestir extends Producto {
        #talla;
        #planchado;
        static contador =0;
        constructor(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento,talla,planchado) {
            super(codigo,descripcion,precioCompra,precioVenta,cantidadBodega,cantidadMinimaBodega,cantidadMaximaInventario,porcentajeDescuento);
            this.#talla = talla;
            this.#planchado = planchado;
            ++PrendaVestir.contador;
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
        mostrar(){
            body += `<div id="color" class="card text-white bg-danger mb-3 ms-3" style="max-width: 18rem;">
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
            </div>
        </div>`;
        }
        solicitarPedido() {
            if (this.cantidadBodega >= this.cantidadMinimaBodega) {
                return true;
            }
            return false;
        };
        
    }
    class Calzado extends Producto {
        #talla;
        static contador =0;
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
        mostrar(){
            body += `<div id="color" class="card text-white bg-success mb-3 ms-3" style="max-width: 18rem;">
                <div class="card-header">codigo del producto: ${this.codigo}</div>
                <div class="card-body">
                <p class="card-text">Descripcion: ${this.descripcion}</p>
                <p class="card-text">talla: ${this.talla}</p>
                <p class="card-text">Precio compra${this.precioCompra}</p>
                <p class="card-text">Precio venta${this.precioVenta}</p>
                <p class="card-text">Cantidad en bodega${this.cantidadBodega}</p>
                <p class="card-text">Cantidad minima en bodega: ${this.cantidadMinimaBodega}</p>
                <p class="card-text">Cantidad minima en maxima: ${this.cantidadMaximaInventario}</p>
                </div>
            </div>`;
        }
        solicitarPedido() {
            if (this.cantidadBodega >= this.cantidadMinimaBodega) {
                return true;
            }
            return false;
        };
    }   
    tarjeta="";
    datos=[];
    
    function agregar1(){
        body = "";
        let codigo = document.getElementById("codigo").value;
        let tipo = document.getElementById("tipo").value;
        let descripcion = document.getElementById("descripcion").value;
        let talla = document.getElementById("talla").value;
        let planchado = document.getElementById("planchado").value;
        let precioCompra = document.getElementById("precioCon").value;
        let precioVenta = document.getElementById("precioVen").value;
        let cantidad = document.getElementById("cantidad").value;
        let cantidadMinimaBodega = document.getElementById("cantidadMin").value;
        let cantidadMaximaInventario = document.getElementById("cantidadMax").value;
        let porcentajeDescuento = document.getElementById("descuento").value;
        if(tipo === "prenda"){
            // Crear instancia de la clase PrendaVestir
            let prendaa = new PrendaVestir(codigo, descripcion, precioCompra, precioVenta, cantidad, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento, talla, planchado);
            prendaa.mostrar();
            //crear color de la tarjeta
            if(prendaa.solicitarPedido() === true)
            }else{
                let calzado = new Calzado(codigo, descripcion, precioCompra, precioVenta, cantidad, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento, talla);
                calzado.mostrar();
                //crear color de la tarjeta
                console.log(calzado.solicitarPedido());
            };

        datos.push({
            codigo: codigo,
            tipos: tipo,
            descripcion: descripcion,
            talla: talla,
            precioCon: precioCompra,
            precioVen:precioVenta,
            cantidadt : cantidad,
            cantidadMinima : cantidadMinimaBodega,
            cantidadMaxima : cantidadMaximaInventario,
            porcentaje : porcentajeDescuento
        });
        document.getElementById("datoss").innerHTML += body;
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
        document.getElementById("tipo").value = "";
    };
    function mostrarCampoAdicional() {
        let option = document.getElementById("tipo").value;
        let planchado = document.getElementById("planchado");
        let talla = document.getElementById("talla");
        if (option === "prenda") {
            planchado.style.display = "block";
            talla.type = "text";
        } else {
            planchado.style.display = "none";
            talla.type = "number"
        }
    };
    
