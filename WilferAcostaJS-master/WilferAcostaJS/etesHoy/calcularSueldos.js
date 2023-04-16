function calcular(){
    let cedula=document.getElementById("cedula").value;
    let nombre=document.getElementById("nombre").value;
    let categoria=document.getElementById("categoria").value;
    let salarioBruto=0;
    let bonificacion=0;
    let auxilio=0;
    let eps=0;
    let pension=0;
    switch (categoria){
        case "Auxiliar A":
            salarioBruto+= 1160000;
            bonificacion+=100000;
            break;

        case "Auxiliar B":
            salarioBruto+= 1200000;
            bonificacion+=100000;
            break;

        case "Técnico A":
            salarioBruto+=1500000;
            bonificacion+=150000;
            break;

        case "Técnico B":
            salarioBruto+=2000000;
            bonificacion+=15000;
            break;

        case "Profesional A":
            salarioBruto+=2500000;
            bonificacion+=200000;
            break;

        case "Profesional B":
            salarioBruto+=3000000;
            bonificacion+=250000;
            break;

        case "Director A":
            salarioBruto+=4000000;
            bonificacion+=500000;
            break;

        case "Director B":
            salarioBruto+=4500000;
            bonificacion+=1000000;
            break;

        case "Gerente Departamento":
            salarioBruto+=6000000;
            bonificacion+=2000000;
            break;
        case "Gerente General":
            salarioBruto+=5000000;
            bonificacion+=5000000;
            break;
        default:
            alert("categoria no existe Intenta de nuevo")
    }
    if (salarioBruto<1500000){
        salarioBruto+=salarioBruto
        auxilio=400000;
        eps=salarioBruto*0.04;
        pension=salarioBruto*0.04;
        salarioTotal=salarioBruto+auxilio+bonificacion-eps-pension
    }else{
        salarioBruto;
        eps=salarioBruto*0.04;
        pension=salarioBruto*0.04;
        salarioTotal=salarioBruto+bonificacion-eps-pension
        auxilio=0;
    }
    const usuario = new Array;
    usuario.push(cedula,nombre,categoria,salarioBruto,auxilio,bonificacion,eps,pension,salarioTotal);
    datos.push(usuario);
    cont += `<tr><td>${usuario[0]}</td><td>${usuario[1]}</td><td>${usuario[2]}</td><td>${usuario[3]}</td><td>${usuario[4]}</td><td>${usuario[5]}</td><td>${usuario[6]}</td><td>${usuario[7]}</td><td>${usuario[8]}</td></tr>`;
    document.getElementById("tabla").innerHTML= cont;  
    let nombreMayor="";
    let nombreMenor="";
    let mayorS= 0;
    let menorS= 0;
    let sumaS=0;
     datos.forEach(subarray =>{
         if(subarray[8]>mayorS){
             nombreMayor = subarray[1];
             mayorS=subarray[8];
         } 
         if(subarray[8] < menorS){
             nombreMenor=subarray[1];
             menorS=subarray[8];
         }
         sumaS+= subarray[8]; 
     });
     promedioSueldos=sumaS/datos.length;
     cont2 =`<tr><td>${datos.length}</td><td>${nombreMenor}"\t\t"${menorS}</td><td>${promedioSueldos}</td><td>${nombreMayor}"\t\t"${mayorS}</td><td>${sumaS}</td></tr>`;
     document.getElementById("tabla2").innerHTML= cont2;
}
const datos = new Array;
const sueldoTnombre= new Array;
let cont ="";
let cont2="";


