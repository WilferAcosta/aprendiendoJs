import { comentarios } from "./comentarios.js";
import { videoRelacionados } from "./videosRelacionados.js";


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
	const response = await fetch(url, options);
	const result = await response.json();
	const id = result.contents[0].video.videoId;
    document.getElementById("video").innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	<h1><img src="${result.contents[0].video.author.avatar[0].url}" alt="avatar">${result.contents[0].video.title}<span>(${result.contents[0].video.publishedTimeText}) vistas:${result.contents[0].video.stats.views}</span></h1><br>
	<h2>Descripcion</h2>
	<p>${result.contents[0].video.descriptionSnippet}</p>`;
    comentarios(id);
	videoRelacionados(id);
	document.getElementById("description").innerHTML = `<br><h2>Comentarios</h2><br><p></p>`;
} catch (error) {
	console.error(error);
}
};