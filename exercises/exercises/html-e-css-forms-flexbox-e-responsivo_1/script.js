const estados = document.getElementById('state')
function opcaoesEtados() {
    const selecioneEstado = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']; 

  for (let index = 0 ; index < selecioneEstado.length; index += 1 ) {
  const criaEstado = document.createElement('option')
  console.log(criaEstado[index])

    estados.appendChild(criaEstado).innerText = selecioneEstado[index]
    estados.appendChild(criaEstado).value = selecioneEstado[index]
  }
}



window.onload = function() {
  opcaoesEtados()
}