class Figura{
    #color
    #area
    constructor({color,area}){
        this.#color = color;
        this.#area = area;
    }
    set setColor(color){
        this.#color = color;
    }
    get getColor(){
        return this.#color;
    }
    set setArea(area){
        this.#area = area;
    }
    get getArea(){
        return this.#area;
    }
    calcularArea(a,b){
        return a*b
    }
}
class circulor{
    #radio
    constructor({color,area,radio}){
        super({color,area})
        this.#radio = radio;
    }
    set setRadio(radio){
            this.#radio = radio;
        }
    get getRadio(){
            return this.#radio;
        }
        calcularArea(){
            return Math.PI * this.#radio * this.#radio;
        }
}
class rectangulo{
    #largo
    #ancho
    constructor({largo,ancho}){
        super({color,area})
        this.#largo = largo;
        this.#ancho = ancho;
    }
    set setLargo(largo){
        this.#largo = largo;
    }
    get getLargo(){
        return this.#largo;
    }
    set setAncho(ancho){
        this.#ancho = ancho;
    }
    get getAncho(){
        return this.#ancho;
    }
    calcularArea(){
        return this.#largo * this.#ancho;
    }
}

document.addEventListener('click',(e)=>{
    if(e.target.id=='sumit'){
        enviar();
    }
})

function enviar(){
    let color= document.getElementById("color").value;
    let area = document.getElementById("area").value;
    let raza = document.getElementById("raza").value;
    let circulo = document.getElementById("circulo");
    let rectangulo = document.getElementById("rectangulo");
    switch(area){
        case "circulo":
            circulo.style.display="block";

            
            break;
        case "rectangulo":
            break;
    }

    let perro1 = new Perro({nombre,edad,raza});
    alert(perro1.moverCola());
    alert(`El animal se llama ${perro1.getNombre}`);
    
}


