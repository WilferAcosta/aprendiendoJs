function faltoral(n){
    let num = 1;
    for(let i=1;i<=n;i++){
      num*=i
    }
    return num;
  }
  let n =Number(prompt("...Ingrese el numero para calcular el factorial..."));
  resultado=faltoral(n)
  console.log(`El resultado es ${resultado}`);