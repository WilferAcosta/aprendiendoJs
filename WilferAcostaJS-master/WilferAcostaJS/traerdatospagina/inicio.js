const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++){
        body += `<tr><td>${data[i].userId}</td><td>${data[i].id}</td><td>${data[i].title}</td><td>${data[i].completed}</td></tr>`
    }
    document.getElementById('data').innerHTML = body

}


const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url)
.then(Response => Response.json())
.then(data => mostrarData(data))
.catch(error => mostrarData(error))