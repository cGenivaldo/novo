// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);


// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// const ordenandoNumero = () => {
//   for (let index = 0; index < oddsAndEvens.length; index += 1){
//     oddsAndEvens.sort((a, b) => a - b)
//   };
//   return oddsAndEvens
// }
// console.log(ordenandoNumero(oddsAndEvens))

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = numero => {
 let resultado = 1

 for (let index = 2; index < numero; index += 1) {
   resultado *= index

return resultado
  }
}

console.log(fatorial(5))

