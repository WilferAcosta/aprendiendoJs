// Crear un objeto de fecha con la fecha actual
const fecha = new Date();

// Obtener el día, mes y año
const dia = fecha.getDate();
const mesNumero = fecha.getMonth(); // Los meses empiezan en 0
const anio = fecha.getFullYear();

// Crear una matriz de nombres de mes
const nombresMeses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

// Obtener el nombre del mes
const mesNombre = nombresMeses[mesNumero];

// Crear un nuevo elemento <p> y definir su contenido
const fechaElemento = document.createElement('p');
fechaElemento.textContent = `${dia} de ${mesNombre} de ${anio}`;

// Agregar el elemento al cuerpo del documento
document.body.appendChild(fechaElemento);