const CuentaCorrienteA = {
    numero: 123,
    nombre: 'wilfer',
    saldo: 350_000,
    depositar(monto){
        this.saldo += monto;
    },
    girar(monto){
        if(this.saldo >= monto)
        this.saldo -= monto;
        else
            return false;
        return true;
    },
    ConsultarSaldo(){
        return this.saldo;
    }
}
console.log(CuentaCorrienteA.ConsultarSaldo());
console.log(CuentaCorrienteA.depositar(350_000));
console.log(CuentaCorrienteA.girar(200_000));
console.log(CuentaCorrienteA.ConsultarSaldo());
const CuentaCorrienteB = {
    numero: 9876,
    nombre: 'acosta',
    saldo: 450_600,
    depositar(monto){
        this.saldo += monto;
    },
    girar(monto){
        if(this.saldo >= monto)
        this.saldo -= monto;
        else
            return false;
        return true;
    },
    ConsultarSaldo(){
        return this.saldo;
    }
}
console.log(CuentaCorrienteB.ConsultarSaldo());
console.log(CuentaCorrienteB.depositar(3_350_000));
console.log(CuentaCorrienteB.girar(200_000));
console.log(CuentaCorrienteB.ConsultarSaldo());

console.log(CuentaCorrienteB.saldo);