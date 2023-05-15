const BTNAGREGAR = document.getElementById("btnAgregar");
BTNAGREGAR.addEventListener("click",agregarEmpleadoNomina);
/*
    mapEMpleado ={
        cedula:{

        }
    }
    */
const vEmplados = [];
const mapTotalNomina = new Map();
const mapEstadistica = new Map();
const salMinimo = 1_160_000;
function agregarEmpleadoNomina(e){
    if (capturarInformacion() === false)return ;
}

function capturarInformacion(){
    const mapEmpleado = new Map();
    const cedula = document.getElementById("cedula");
    if (cedula.value.length <= 0){
        alert("Valor Incorrecto De La Cèdula");
        cedula.focus();
        return false;
    }
    const nombre = document.getElementById("nombre");
    const ctrlcategoria= document.getElementById("categoria");
    const categoria = ctrlcategoria.options[ctrlcategoria.selectedIndex].text;
    const abrCategoria = ctrlcategoria.value;
    
    const datEmpl = new Map([
        ["nombre",nombre.value],
        ["categoria", categoria],
        ["abrCategoria", abrCategoria]
    ]);

    mapEmpleado.set(cedula, datEmpl);
    vEmplados.push(mapEmpleado);
    console.log(vEmplados);
    return true;
}