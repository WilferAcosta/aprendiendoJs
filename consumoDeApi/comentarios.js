export async function comentarios(id){
	const url = `https://youtube138.p.rapidapi.com/video/comments/?id=${id}&hl=en&gl=US`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c3a7a1fa4msh0e92c078fd61424p137867jsnebb20098d172',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	let body2 = "";
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.comments);
	result.comments.forEach(e => {
		body2 += `<div><img  class="icoComen" src="${e.author.avatar[0].url}">${e.author.title}<p>${e.content}</p></div>`;
	});
	return document.getElementById("comentarios").innerHTML = body2;

} catch (error) {
	console.error(error);
}
}