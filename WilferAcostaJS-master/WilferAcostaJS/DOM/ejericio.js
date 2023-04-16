
function ordenar() {
    let montoCredito = Number(document.getElementById("monto").value);
    let interesAnual = Number(document.getElementById("interes").value);
    let cantidadMes = Number(document.getElementById("mensual").value);
    let total=montoCredito+(montoCredito*(interesAnual/100));
    let cota=total/cantidadMes;
    let interesMensual=cota*((interesAnual/100)/cantidadMes);
    document.getElementById("valor-total").value=total.toFixed(2);
    document.getElementById("valor-mensual").value=cota.toFixed(2);
    console.log(interesMensual.toFixed(2));
    capital=cota-interesMensual;
    let monto=montoCredito+capital;
    let valortotal=total+cota;
    let cont ="";
    for (let i=1;i<=cantidadMes;i++){
        monto-=capital;
        valortotal-=cota;
        cont += `<tr><td>${i}</td><td>$${monto.toFixed(2)}</td><td>$${valortotal.toFixed(2)}</td><td>$${capital.toFixed(2)}</td><td>$${interesMensual.toFixed(2)}</td><td>$${cota.toFixed(2)}</td></tr>`;
        document.getElementById("tabla").innerHTML= cont;
        
    }
    document.getElementById("tabla").innerHTML+=`<tr><td></td><td></td><td></td><td>$${(capital*cantidadMes).toFixed(2)}</td><td>$${(interesMensual*cantidadMes).toFixed(2)}</td><td>$${(cota*cantidadMes).toFixed(2)}</td></tr>`
}
