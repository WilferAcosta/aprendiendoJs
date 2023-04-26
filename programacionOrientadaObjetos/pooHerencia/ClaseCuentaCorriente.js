class Cuentacorriente {//nombre de la clase siempre la primera en mayuscula calmecase
    static cantidad = 0;
    constructor(numero, nombre, saldo) {//constrictor se le pasa lo atributos de lo que vamos a recibir 
        this.numero = numero;
        this.nombre = nombre;
        this.saldo = saldo;
        ++Cuentacorriente.cantidad;
    }
    //declaramos metodos
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
    static nombreBanco(){
        return "Campus Bank";
    }
}
//crear instancias 
const ctaCorrA = new Cuentacorriente(123,"juan",350000);
const ctaCorrB = new Cuentacorriente(9786,"wilfer", 450600);

console.log(ctaCorrA.ConsultarSaldo());
ctaCorrA.depositar(350_000);
ctaCorrA.girar(200_000);
console.log(ctaCorrA.ConsultarSaldo());
console.log("=".repeat(40));
console.log(ctaCorrB.ConsultarSaldo());
ctaCorrB.depositar(3_350_000);
ctaCorrB.girar(200_000);
console.log(ctaCorrB.ConsultarSaldo());

console.log(ctaCorrB.saldo);
ctaCorrB.fechaCreacion = new Date("2000/01/01");
console.log(Cuentacorriente.cantidad);
console.log(Cuentacorriente.nombreBanco());
