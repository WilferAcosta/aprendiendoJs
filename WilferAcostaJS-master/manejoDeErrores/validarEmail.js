function calcular(base,altura){
    if (base < 0 || altura < 0 || isNaN(base) || isNaN(altura))
        throw new Error('el valor no puede ser negativo y debe ser numerico');
    return base * altura;
        
}try {
    console.log(calcular(5,5))
}catch(error){
    console.log("ha ocurrido una excepcion.\n",error);
}