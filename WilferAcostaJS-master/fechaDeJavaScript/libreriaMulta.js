str=""
function fechaActual(){
const fechaIni = new Date(document.getElementById("fechaToma").value);
const fechaEntr = new Date(document.getElementById("fechaEntrega").value);
console.log(fechaIni.toString(),fechaEntr.toString());
diff = fechaEntr.getDate() - fechaIni.getDate();
console.log(diff)
if(diff > 0 && diff <= 3){
    multa = diff*7000;
    str= `tiene un retraso de ${diff} dias y su multa es de $${multa}.`;
    document.getElementById("deuda").innerHTML= str;
}else if (diff>5){
    multa=diff*10000;
    str = `Tiene un retraso de ${diff} dias y su multa es de ${multa} y una sancion de no prestamo por 6 meses.`;
    document.getElementById("deuda").innerHTML = str;
}else{
    str=`NO tiene multa gracais por entregarlo a tiempo. `;
    document.getElementById("deuda").innerHTML=str;
}  
}
