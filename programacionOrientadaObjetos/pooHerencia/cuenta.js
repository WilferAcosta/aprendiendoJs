class Cuenta {//nombre de la clase siempre la primera en mayuscula calmecase
    static cantidad = 0;
    constructor(numero, nombre, saldo) {//constrictor se le pasa lo atributos de lo que vamos a recibir 
        this._numero = numero;
        this._nombre = nombre;
        this._saldo = saldo;
        ++Cuenta.cantidad;
    }
    set numero(nuevoNumero){
        this._numero = nuevoNumero;
    }
    get numero(){
        return this._numero;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get nombre(){
        return this._nombre;
    }
    set saldo(nuevoSaldo){
        this._saldo = nuevoSaldo;
    }
    get saldo(){
        return this._saldo;
    }
    //metodos
    depositar(monto) {
        this._saldo += monto;
    };
    girar(monto) {
        if (this._saldo >= monto)
            this.saldo -= monto;
        else return false;
        
    };
    ConsultarSaldo() {
        return this._saldo;
    }
    static nombreBanco(){
        return "Campus Bank";
    }
}
class CuentaAhorro extends Cuenta{

}

let ctAh1 =new CuentaAhorro(789,"wilfer",50000);
ctAh1.depositar(1_200_000);
console.log(ctAh1.ConsultarSaldo());
console.log(CuentaAhorro.cantidad);

class CuentaCorriente extends Cuenta{
    static cantidad = 0;
    constructor(numero,nombre,saldo,topeCredito){
        super(numero,nombre,saldo);
        this._topeCredito = topeCredito;
        if(this._topeCredito === undefined){
            this.topeCredito = 0;
        }
        ++CuentaCorriente.cantidad;
    }
    set topeCredito(nuevoTope){
        this._topeCredito = nuevoTope;
    }
    get topeCredito(){
        return this._topeCredito
    }
    //metodo de la clase
    girar(monto) {
        if ((this.saldo-monto) >= -this._topeCredito){
            this.saldo -= monto;
            return true;
        }
        return false;
    };
}
let ctaC = new CuentaCorriente(123,"orladno",2_000_000,2_000_000);
ctaC.girar(2_500_000);
ctaC.depositar(500_000);
ctaC.girar(7_000_000);
console.log("saldo ",ctaC.ConsultarSaldo());