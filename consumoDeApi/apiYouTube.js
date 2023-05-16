
async function buscar() {
    const buscar = document.getElementById("buscar").value;
    const url = `https://youtube138.p.rapidapi.com/search/?q=${buscar}&hl=en&gl=US`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c3a7a1fa4msh0e92c078fd61424p137867jsnebb20098d172',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
try {
	let body= "";
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result);
	console.log();
	const id = result.contents[1].video.videoId;

    document.getElementById("video").innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	<h1><img src="${result.contents[1].video.author.avatar[0].url}" alt="avatar">${result.contents[1].video.title}<span>(${result.contents[1].video.publishedTimeText}) vistas:${result.contents[1].video.stats.views}</span></h1><br>
	<h2>Descripcion</h2>
	<p>${result.contents[1].video.descriptionSnippet}</p>`;
    comentarios(id);
	document.getElementById("description").innerHTML = `<br><h2>Comentarios</h2><br><p></p>`;
} catch (error) {
	console.error(error);
}
}
async function comentarios(id){
	console.log(id)
	const url = `https://youtube138.p.rapidapi.com/video/comments/?id=${id}&hl=en&gl=US`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c3a7a1fa4msh0e92c078fd61424p137867jsnebb20098d172',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	result.comments.forEach(e => {
		document,getElementById("comentarios").innerHTML = `<div><img src="${e.author[e+1].url}"><p>${e.author[e+1].content}</p></div>`
	});
} catch (error) {
	console.error(error);
}
}

