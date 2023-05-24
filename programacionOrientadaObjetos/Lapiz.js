/**creamos la clase padre  lapiz */
class Lapiz{
    color;
    tamaño;
    #material;
    #mina;
    /**
     * 
     * @param {color} *atributo color con el modificador de acceso publico 
     * @param {tamaño} *atributo tamaño con el modificador de acceso public
     * @param {material} *atributo material con el modificador de acceso privados
     * @param {mina} *atributo mina con el modificador de acceso privados
     * estos atributos los recibe el constructor como parametros;
     */
    constructor({color="amarilla", tamaño="9cm",material="plastico",mina="carbon"}){
        this.color = color;
        this.tamaño= tamaño;
        this.#material = material;
        this.#mina= mina;
        
    };
    /**
     * se crea el encapsulamiento de las atributos privados . 
     */
    setMaterial(material){
        this.#material = material;
    }
    getMaterial(){
        return this.#material;
    }
    setMina(mina){
        this.#mina = mina;
    }
    getMina(){
        return this.#mina;
    }
    static afilar(p1){
        return `la mina de ${p1}`;
    }
    
}
/**
 * creamos la instancia de la clase padre Lapiz.
 */
const lapiz1 = new Lapiz({tamaño: "10cm"});
console.log(Lapiz.afilar(lapiz1.getMina()));
















