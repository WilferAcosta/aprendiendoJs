function calcularTotal(){
    total=(montoCredito+(montoCredito*iteresAnual))/cantidadMes;
    return total;
}
function calcularCapital(){
    capital=montoCredito/cantidadMes;
    return capital;
}
function calcularInteres(){
    interes=total-capital;
    return interes;
}
let montoCredito=Number(prompt("...Digite el monto del credito a tomar..."));
let iteresAnual=Number(prompt("...Digite el interes anual para el cliente..."));
let cantidadMes=Number(prompt("...Digite la cantidad de cuotas del cliente..."));
const buildFIla=(cantidadMes,montoCredito,calcularTotal(),calcularInteres(),calcularCapital()) => {
    return `<tr><td>${anio}</td><td>${monto.toFixed(2)}</td></tr>`;
}