const estados = document.getElementById('state')
function opcaoesEtados() {
    const selecioneEstado = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']; 

  for (let index = 0 ; index < selecioneEstado.length; index += 1 ) {
  const criaEstado = document.createElement('option')
    estados.appendChild(criaEstado).innerText = selecioneEstado[index]
    estados.appendChild(criaEstado).value = selecioneEstado[index]
  }
}

function datas(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5 ){
    const dia = data.substr(0, 2)
    const mes  = data.substr(3, 2)
    const ano = data.substr(6, 4)
    if ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano >= 0 && ano.length === 4)) {
      return true
    }
  }
  return false
}

function checkData() {
  const adicionaData = document.querySelector('.input-data')
  let data = inputData.value
  const dataUsuario = datas(data)
  if(!dataUsuario && data.length) {
    inputData.value = ''
    alert('Data invalida')
  }
  return dataUsuario
}


function checkEmail() {
  const email = document.querySelector('.email-input')
  let inserirEmail = email.value
  const formatoEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(inserirEmail)
  if (!formatoEmail && inserirEmail.length) {
    email.value = ''
    alert('e-mail inválido')
    return false
  }
  return formatoEmail
}

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}


function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', renderCurriculum);
clearButton.addEventListener('click', clearFields);
window.onload = function() {
  opcaoesEtados()
}