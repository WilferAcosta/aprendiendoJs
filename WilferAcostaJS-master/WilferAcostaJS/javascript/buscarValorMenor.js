function menorValor(){
    let num=Number(prompt("Ingrese la cantidad de numeros a ingresar"));
    let menor = Infinity;
    for (let i=1;i<=num;i++){
        let numero=Number(prompt("Ingrese un numero"));
        if(numero < menor)menor=numero;
    }
    return menor;
}
console.log(menorValor());