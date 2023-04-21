const ahora = new Date();//muestra la hora actual
console.log(ahora);
const randomdate = new Date(2015,3,12,6,25,58);//se le pasa año,mes,dia,hora,minutos,segundos y si no se le pone la hora,minutos ,segundos pone las 00,00,00
console.log(randomdate);
//asignando valores
const ahora2 = new Date();
ahora2.setFullYear(1994);
ahora2.setMonth(7);
ahora2.setDate(27);
console.log(ahora2);
//obteniendo valores
const ahora3= new Date();
console.log(ahora3.getFullYear());
console.log(ahora3.getMonth());
console.log(ahora3.getTime());
console.log(ahora3.getDay());
console.log(ahora3.getHours());
console.log(ahora3.getMinutes());
console.log(ahora3.getSeconds());
//date string volver la fecha en string
console.log(ahora3.toDateString());
// totimestring nos devuelve un stroing con la hora local actual
console.log(ahora3.toTimeString());
//
console.log(ahora3.toLocaleDateString());
//COMPARRA DE FECHAS 
const now =new Date();
const before = new Date('october 8 2019 16:30:30');
const diff = now.getTime() - before.getTime();
console.log(diff);
//traer con diff minutos hora y fecha
const minuto = Math.round(diff /1000 / 60);
const hora = Math.round(minuto / 60);
const dia =  Math.round(hora / 24);
console.log(minuto,hora,dia);
console.log(`this post was wrriten ${dia} ago`);