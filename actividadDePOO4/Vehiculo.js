class Vehiculo{
    #marca
    #modelo
    #velocidad
    constructor({marca,modelo,velocidad}){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#velocidad = velocidad;
    }
    set setMarca(marca){
        this.#marca = marca;
    }
    get getMarca(){
        return this.#marca;
    }
    set setModelo(modelo){
        this.#modelo = modelo;
    }
    get getModelo(){
        return this.#modelo;
    }
    set setVelocidad(velocidad){
            this.#velocidad = velocidad;
    }
    get getVelocidad(){
        return this.#velocidad;
    }
    acelerar(){
        
        return this.#velocidad + 10;
    }
    static convertirKmHEnMph(velocidad){
        return `${velocidad/1.60934} millas`
    }
}
class Coche extends Vehiculo{
    #combustible
    constructor({marca,modelo,velocidad,combustible}){
        super({marca,modelo,velocidad});
        this.#combustible = combustible;
    }
    set setCombustible(combustible){
        this.#combustible = combustible;
    }
    get getCombustible(){
        return this.#combustible;
    }
    acelerar(){
            return this.getVelocidad + 20;
        }
}
const boton = document.querySelector("#sumit");
boton.addEventListener('click' ,function(e){
    e.preventDefault();
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let velocidad = document.getElementById("velocidad").value;
    let combustible = document.getElementById("combustible").value;
    const coche1 = new Coche({marca:marca,modelo:modelo,velocidad:velocidad,combustible:combustible});
    alert(coche1.acelerar())
    alert(Vehiculo.convertirKmHEnMph(coche1.getVelocidad));
});




