function diasMes(mes){
    switch(mes){
      case 1: 
        console.log("El mes es enero y tiene 31 dias");
        break;
      case 2:
        console.log("El mes es febrero y tiene 28 dias");
        break;
      case 3:
        console.log("El mes es marzo y tiene 31 dias");
        break;
      case 1: 
        console.log("El mes es abril y tiene 30 dias");
        break;
      case 2:
        console.log("El mes es mayo y tiene 31 dias");
        break;
      case 3:
        console.log("El mes es junio y tiene 30 dias");
        break;
      case 1: 
        console.log("El mes es julio y tiene 31 dias");
        break;
      case 2:
        console.log("El mes es agosto y tiene 31 dias");
        break;
      case 3:
        console.log("El mes es septiembre y tiene 30 dias");
        break;
      case 1: 
        console.log("El mes es octubre y tiene 31 dias");
        break;
      case 2:
        console.log("El mes es noviembre y tiene 30 dias");
        break;
      case 3:
        console.log("El mes es Diciembre y tiene 31 dias");
        break;
    }
  }
  
  let mes =Number(prompt("...Ingrese el numero del mes que desea saber los diasque tiene..."));
  console.log(diasMes(mes));