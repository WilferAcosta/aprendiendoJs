function cambiar(ip){
    for (i=0;i<ip.length;i++){
      return ip[i].replaceAll(".","[.]")
    }
      
  }
  let ip =Number(prompt("...Ingrese la direccion Ip..."));
  console.log(cambiar(ip));