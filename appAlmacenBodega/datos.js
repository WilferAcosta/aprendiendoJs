
export function agregar1(){
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
    }