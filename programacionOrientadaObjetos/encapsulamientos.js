class cuentaCorriente {
    constructor(numero, nombre, saldo) {
    this._numero = numero;
    this._nombre = nombre;
    this._saldo = saldo;
}
//seter y geter
set numero(nuevoNumero){// set sirve para modificar
    this._numero = nuevoNumero;
}
get numero(){// para traer el datos
    return this._numero;
}
set nombre(nuevoNombre){
    console.log("setnombre")
    this._nombre = nuevoNombre;
}
get nombre(){
    console.log("get nombre")
    return this._nombre;
}
set saldo(nuevoSaldo){
    this._saldo = nuevoSaldo;
}
get saldo(){
    console.log("get saldo")
    return this._saldo;
}
//metodos
depositar(monto) {
    this.saldo += monto;
};
girar(monto) {
    if (this.saldo >= monto)
        this.saldo -= monto;
    else
        return false;
    return true;
};
ConsultarSaldo() {
    return this.saldo;
}

}
const cuentaA = new cuentaCorriente(1234,"juan",350000);
cuentaA.depositar(100000);
console.log(cuentaA.ConsultarSaldo());
cuentaA.nombre = "wilfer";//va al set para modificar
console.log("nombre",cuentaA.nombre);//luego va por el get y lo trae
