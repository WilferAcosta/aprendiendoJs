
const Facturas = new Map();
let cont = "";
function agarFactura() {
    const numFactura = Number(document.getElementById("numFactura").value);
    const valorFactura = Number(document.getElementById("valorFactura").value);
    cont += `<tr><td>${numFactura}</td><td>${valorFactura}</td></tr>`;
    Facturas.set(numFactura, valorFactura);
    document.getElementById("impFacturas").innerHTML = cont;
}

function pagaFactura(){
    console.log(Facturas);
    let valortotal=0;
    const nfactura= Number(document.getElementById("numFactura").value);
    const vfactura= Number(document.getElementById("valorFactura").value);
    if(Facturas.has(nfactura)) {
        valortotal=Facturas.get(nfactura) - vfactura;
        if(valortotal === 0) {
            Facturas.delete(nfactura);
        }
        Facturas.set(nfactura,valortotal);
        // Actualizar el HTML
        cont = "";
        for (const [key, value] of Facturas) {
            cont += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }
    }   
document.getElementById("impFacturas").innerHTML = cont;
}
