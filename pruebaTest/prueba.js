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
        mostrar(soli){
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
            </div>
        </div>`;
        }
        solicitarPedido() {
            return this.cantidadBodega >= this.cantidadMinimaBodega
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
        mostrar(soli){
            body += `<div id="color" class="card text-dark ${soli ? 'bg-white' : 'bg-secondary' } mb-3 ms-3" style="max-width: 18rem;">
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
            return this.cantidadBodega >= this.cantidadMinimaBodega
        };
    }   
    tarjeta="";
    datos=[];
    
    function agregar1(){
        body = "";
        data={};
        data.codigo = document.getElementById("codigo").value;
        data.tipo = document.getElementById("tipo").value;
        data.descripcion = document.getElementById("descripcion").value;
        data.talla = document.getElementById("talla").value;
        data.planchado = document.getElementById("planchado").value;
        data.precioCompra = document.getElementById("precioCon").value;
        data.precioVenta = document.getElementById("precioVen").value;
        data.cantidad = document.getElementById("cantidad").value;
        data.cantidadMinimaBodega = document.getElementById("cantidadMin").value;
        data.cantidadMaximaInventario = document.getElementById("cantidadMax").value;
        data.porcentajeDescuento = document.getElementById("descuento").value;
        if(tipo === "prenda"){
            // Crear instancia de la clase PrendaVestir
            let prendaa = new PrendaVestir(data.codigo, data.descripcion, data.precioCompra, data.precioVenta, data.cantidad, data.cantidadMinimaBodega, data.cantidadMaximaInventario, data.porcentajeDescuento, data.talla, data.planchado);
            soli = prendaa.solicitarPedido();
            console.log(soli);
            prendaa.mostrar(soli);
        }else{
                let calzado = new Calzado(data.codigo, data.descripcion, data.precioCompra, data.precioVenta, data.cantidad, data.cantidadMinimaBodega, data.cantidadMaximaInventario, data.porcentajeDescuento, data.talla);
                soli = calzado.solicitarPedido();
                console.log(soli);
                calzado.mostrar(soli);
            };
            //creo un odjeto donde estan todos los elmentos del form
        datos.push(data);
        let mayor = 0;
        datos.map(function(element){
            datos.cantidad > mayor
            mayor = element;
        });
        console.log(mayor);
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
    
