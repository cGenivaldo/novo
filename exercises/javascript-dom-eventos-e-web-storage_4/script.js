// Botões cores de fundo
window.onload = function() {
	function mudaCorDeFundo(color) {
		let content = document.querySelector('.content')
		content.style.backgroundColor = color
		localStorage.setItem('backgroundColor', color)
	}	
  // Botões cores da fonte
  function mudaCorDaFonte(color) {
    let paragrafos = document.querySelectorAll('.paragraph')
    for (let index = 0; index < paragrafos.length; index += 1) {
      paragrafos[index].style.color = color
    }
    localStorage.setItem('font-color', color)
  }

// Alterando a cor de fundo
let botaoCorDeFundo = document.querySelectorAll('#background-color>button') 
for (let index = 0; index < botaoCorDeFundo.length; index += 1) {
	 botaoCorDeFundo[index].addEventListener('click', function(event) {
	 	mudaCorDeFundo(event.target.innerHTML)
	 })
}

// Alterando a cor da fonte
let fontesDoBotao = document.querySelectorAll("#font-color>button")
for (let index = 0; index < fontesDoBotao.length; index += 1) {
  fontesDoBotao[index].addEventListener('click', function(event) {
    mudaCorDaFonte(event.target.innerHTML)
  })
}

// Inicialização
function inicializa () {
	let corDeFundo = localStorage.getItem('backgroundColor')
	if (corDeFundo) mudaCorDeFundo(corDeFundo)

  let corDaFonte = localStorage.getItem('fontColor')
  if (corDaFonte) mudaCorDaFonte(corDaFonte)

}

inicializa()

}
