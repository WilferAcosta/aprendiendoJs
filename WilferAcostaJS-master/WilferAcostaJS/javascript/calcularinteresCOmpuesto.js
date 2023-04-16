const calcularInteres= (p,r,n)=>p * ((1+r)**n);
const buildFIla=(anio,monto)=>{
    return `<tr><td>${anio}</td><td>${monto.toFixed(2)}</td></tr>`;
}
function montoDeposito(){
let p=Number(prompt(..."Ingrese el valor de la inversión...\n"));
let r= 0.05;
let n=10;
let strHTML="";
console.log("AÑO \t\t MONTO EN DEPOSITO")
console.log("-".repeat(20));
let monto =0;
for(let i=1;i<=n;i++){
    monto=calcularInteres(p,r,i);
    console.log(`${i} \t\t ${monto.toFixed(2)}`);//.toFixed(2) sirve para decirle cuantos numero quiero que muestre despues del . 1.000.000.00
    strHTML+=buildFIla(i, monto)
}
document.getElementById("datos").innerHTML=strHTML;
//return strHTML;
}
function mensaje(){
    alert("voy bien")
}
