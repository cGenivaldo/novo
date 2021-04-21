window.onload = function() {
	function mudaCorDeFundo(color) {
		let content = document.querySelector('.content')
		content.style.backgroundColor = color
		localStorage.setItem('backgroundColor', color)
	}	
	




// Alterando a cor de fundo

let botaoCorDeFundo = document.querySelectorAll('#background-color>button') 
for (let index = 0; index < botaoCorDeFundo.length; index += 1) {
	 botaoCorDeFundo[index].addEventListener('click', function(event) {
	 	mudaCorDeFundo(event.target.innerHTML)
	 })
}


function inicializa () {
	let corDeFundo = localStorage.getItem('background-color')
	if (corDeFundo) mudaCorDeFundo(corDeFundo)
}

inicializa()
}