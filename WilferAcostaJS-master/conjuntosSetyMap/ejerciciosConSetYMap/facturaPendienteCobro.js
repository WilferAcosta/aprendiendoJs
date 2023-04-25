
const Facturas = new Map();
let cont = "";
function agarFactura() {
    const numFactura = Number(document.getElementById("numFactura").value);
    const valorFactura = Number(document.getElementById("valorFactura").value);
    cont += `<tr><td>${numFactura}</td><td>${valorFactura}</td></tr>`;
    Facturas.set(numFactura, valorFactura);
    document.getElementById("impFacturas").innerHTML = cont;
}
function pagaFactura() {
    console.log(Facturas);
    let valortotal = 0;
    const nfactura = Number(document.getElementById("numFactura").value);
    const vfactura = Number(document.getElementById("valorFactura").value);
    if (Facturas.has(nfactura)) {
        valortotal = Facturas.get(nfactura) - vfactura;
        if (valortotal === 0) {
            Facturas.delete(nfactura);
            //document.getElementById("impFacturas").innerHTML = cont;
        } else {
            Facturas.set(nfactura, valortotal); 
        }
        cont = "";
        for (const [k, v] of Facturas) {
            cont += `<tr><td>${k}</td><td>${v}</td></tr>`;
        }
        document.getElementById("impFacturas").innerHTML = cont;
    }
    

}
