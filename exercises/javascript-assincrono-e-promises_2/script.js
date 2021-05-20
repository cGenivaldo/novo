// 2-Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// Primeiramente, instancie uma Promise
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

const fetPromise = () => {
    const myPromise = new  Promise((resolve, reject) => {
       const myArray = Array.from(
            { length: 10 },
            () => Math.floor(Math.random() * 50) + 1,
        )
    const sum = myArray.map(number => number * number).reduce((sum, number) => sum + number)
        
    sum < 8000 ? resolve(sum) : reject(sum)
    })

    myPromise
        .then((sum) => console.log(`Promisse resolvida ${sum}`))
        .catch((sum) => console.log(`Promisse rejeitada ${sum}`))
}

fetPromise()
