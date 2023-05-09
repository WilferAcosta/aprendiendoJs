import { Producto } from "./productos";
import { PrendaVestir } from "./prendaVestir";
import { Calzado } from "./calzado";
import { agregar1 } from "./datos";

if(data.tipo === "prenda"){
    // Crear instancia de la clase PrendaVestir
    let prendaa = new PrendaVestir(data.codigo, data.descripcion, data.precioCompra, data.precioVenta, data.cantidad, data.cantidadMinimaBodega, data.cantidadMaximaInventario, data.porcentajeDescuento, data.talla, data.planchado);
    soli = prendaa.solicitarPedido();
    totalPagar = prendaa.calcularValorPagar();
    data.ganancia = prendaa.calcularPorcentajeGanancia();
    prendaa.mostrar(soli,totalPagar);
}else{
        let calzado = new Calzado(data.codigo, data.descripcion, data.precioCompra, data.precioVenta, data.cantidad, data.cantidadMinimaBodega, data.cantidadMaximaInventario, data.porcentajeDescuento, data.talla);
        soli = calzado.solicitarPedido();
        totalPagar = calzado.calcularValorPagar();
        data.ganancia = calzado.calcularPorcentajeGanancia();
        calzado.mostrar(soli, totalPagar);
    };
datos.push(data);
let mayor = 0;
datos.map(function(element){
    datos.cantidad > mayor;
    mayor = element;
});
let gana = 0;
datos.map(function(elem){
    datos.ganancia > gana
    gana = elem;
});
console.log(gana);
console.log(mayor);
resumen = `<div id="color" class="card text-dark bg-white mb-3 ms-3" style="max-width: 18rem;">
<div class="card-header">Resumen :</div>
<div class="card-body">
<p class="card-text">cantidad de productos Ingresados: ${Producto.contador}</p>
<p class="card-text">Cantidad de productos de vestir: ${PrendaVestir.contadorV}</p>
<p class="card-text">Cantidad de Calzado: ${Calzado.contadorC}</p>
<p class="card-text">Cantidad de productos que requiere pedidos </p>
<p class="card-text">El calzado con mayor cantidad es codigo: ${mayor.codigo} su descriocion es : ${mayor.descripcion}</p>
<p class="card-text">El producto con mayor margen de ganancia, su codigo es  ${gana.codigo} descripcion: ${gana.descripcion} valor compra: ${gana.precioCompra} valor venta: ${gana.precioVenta} y su margen de ganancia es: ${gana.ganancia}%</p>
</div>
</div>`;
document.getElementById("resumen").innerHTML = resumen;
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