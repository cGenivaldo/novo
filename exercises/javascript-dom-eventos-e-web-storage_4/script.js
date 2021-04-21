// Botões cores de fundo
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


  // Botões cores da fonte
  function mudaCorDaFonte(color) {
    let paragrafos = document.querySelectorAll('.paragraph')
    for (let index = 0; index < paragrafos.length; index += 1) {
      paragrafos[index].style.color = color
    }
    localStorage.setItem('font-color', color)
  }
// Alterando a cor da fonte
let fontesDoBotao = document.querySelectorAll("#font-color>button")
for (let index = 0; index < fontesDoBotao.length; index += 1) {
  fontesDoBotao[index].addEventListener('click', function(event) {
    mudaCorDaFonte(event.target.innerHTML)
  })
}

// botões tamanho da fonte
function alteraTamanhoFonte(size) {
  let paragrafos = document.querySelectorAll('.paragraph')
  for (let index = 0; index < paragrafos.length; index += 1) {
    paragrafos[index].style.fontSize = size
  }
  localStorage.setItem('fontSize', size)
}
 // Alterando o tamanho da fonte
 let fonteTamanhoBotao = document.querySelectorAll('#font-size>button')
 for (let index = 0; index < fonteTamanhoBotao.length; index += 1) {
   fonteTamanhoBotao[index].addEventListener('click', function(event) {
     alteraTamanhoFonte(event.target.innerHTML)
   })
 }


// Altera os espaçamento entreas os caracteres
function espacamentosLinhas(height) {
  let paragrafos = document.querySelectorAll('.paragraph')
  for (let index = 0; index < paragrafos.length; index += 1) {
    paragrafos[index].style.lineHeight = height
  }
  localStorage.setItem('lineHeight', height)
} 
let botoesEspacamentos = document.querySelectorAll('#line-height>button')
for (let index = 0; index < botoesEspacamentos.length; index +=1) {
  botoesEspacamentos[index].addEventListener('click', function(event) {
    espacamentosLinhas(event.target.innerHTML)
  })
}


// Inicialização
function inicializa () {
	let corDeFundo = localStorage.getItem('backgroundColor')
	if (corDeFundo) mudaCorDeFundo(corDeFundo)

  let corDaFonte = localStorage.getItem('fontColor')
  if (corDaFonte) mudaCorDaFonte(corDaFonte)

  let tamanhoFonte = localStorage.getItem('fontSize')
  if (tamanhoFonte) alteraTamanhoFonte(tamanhoFonte)

  let espacamentosLinhas = localStorage.getItem('lineHeight')
  if (espacamentosLinhas) espacamentosLinhas(espacamentosLinhas)

}

inicializa()

}
