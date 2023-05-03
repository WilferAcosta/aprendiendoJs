const myObject= {
    name : "wilfer oraldno",
    age : 32,
    gender :"mele",
    profession : "optician"
}
localStorage.setItem("myObject", JSON.stringify(myObject));//convertimos en un string
console.log(localStorage.getItem("myObject"));

// como se recupera 
let newObject = localStorage.getItem("myObject");//guardamos en una variable
console.log(JSON.parse(newObject));//convierte en objeto de neuvo