class Figura{
    #color
    #area
    constructor(color,area){
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
class Circulor extends Figura{
    #radio
    constructor(color,area,radio){
        super(color,area)
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
class Rectangulo extends Figura{
    #largo
    #ancho
    constructor(color,area,largo,ancho){
        super(color,area)
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
document.addEventListener("DOMContentLoaded", function() {
    let select = document.getElementById("area");
    let circulo = document.getElementById("circulo");
    let rectangulo = document.getElementById("rectangulo");
    let submitButton = document.getElementById("submit");
  
    select.addEventListener("change", function() {
      let selectedOption = select.value;
  
      if (selectedOption === "circulo") {
        circulo.style.display = "block";
        rectangulo.style.display = "none";
      } else if (selectedOption === "rectangulo") {
        circulo.style.display = "none";
        rectangulo.style.display = "block";
      } else {
        circulo.style.display = "none";
        rectangulo.style.display = "none";
      }
    });
  
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      let color = document.getElementById("color").value;
  
      if (select.value === "circulo") {
        let radio = document.getElementById("radio").value;
        let circuloInstance = new Circulor(color, "Círculo", radio);
        let area = circuloInstance.calcularArea();
        console.log("Círculo seleccionado");
        console.log("Radio: " + radio);
        console.log("Color: " + color);
        console.log("Área: " + area);
        // Realiza acciones con la instancia de circuloInstance y el área calculada
      } else if (select.value === "rectangulo") {
        let largo = document.getElementById("largo").value;
        let ancho = document.getElementById("ancho").value;
        let rectanguloInstance = new Rectangulo(color, "Rectángulo", largo, ancho);
        let area = rectanguloInstance.calcularArea();
        console.log("Rectángulo seleccionado");
        console.log("Largo: " + largo);
        console.log("Ancho: " + ancho);
        console.log("Color: " + color);
        console.log("Área: " + area);
        // Realiza acciones con la instancia de rectanguloInstance y el área calculada
      }
    });
  });