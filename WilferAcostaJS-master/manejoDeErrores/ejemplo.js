function calcular(numero){
    if (isNaN(numero))
        throw new Error('la entrada debe ser un numero');
    return numero * numero;
}
try {
    console.log(calcular('a'))
}catch(error){
    console.log("ha ocurrido una excepcion.\n",error);
}