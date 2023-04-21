//para lanzar excepciones se usa throw
throw 'lanzado una excepcion';
//try blqueo de codigo que puede lanzar una excepcion
// catch bloqueo de codigo que correra si ocurrio una excepcion
//finally Opcional.correra sea que ocurra o no una excepcion
try {
    throw "Ejemplo de excepcion que ocurre "
}catch (xe){
    console.log("capturando la excepcion.\n",ex)
}

try{
    let str;
    str.length;
} catch(ex){
    console.log("canturando la excepcion\n",ex)
}