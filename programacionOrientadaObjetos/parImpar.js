class ParImpar{
    constructor(numero){
    this.numero = numero
    }
    paroimpar(numero){
        if(this.numero % 2 == 0){
            return true;
        }
        return false;
    }
    tiponumero(numero){
        if(this.numero === 0){
            console.log("el numero es cero")
        }else if (this.numero > 0){
            console.log("el numero es mayor a cero es positivo")
        }else{
            console.log("el numero es menor a cero es negativo")
        }
    }
    primo(numero){
        if (numero == 0 || numero == 1 || numero == 4) return false;
	    for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
    }
}
const calcularA=new ParImpar(10);
console.log(calcularA.paroimpar());
console.log(calcularA.tiponumero());
console.log(calcularA.primo());
const calcularB=new ParImpar(-2);
console.log(calcularB.paroimpar());
console.log(calcularB.tiponumero());
console.log(calcularB.primo());
const calcularC= new ParImpar(0);
console.log(calcularC.paroimpar());
console.log(calcularC.tiponumero());
console.log(calcularC.primo());