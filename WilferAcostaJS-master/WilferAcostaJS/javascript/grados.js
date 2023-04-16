let calcular = (grados) => { resultado = grados*1.8+32
    return resultado
}
let grados=prompt("...Ingrese los grados celcios")
console.log(`El resultado en grados Farenheit es ${calcular(grados).toFixed(2)}`);

