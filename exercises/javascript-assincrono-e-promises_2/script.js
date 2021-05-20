// Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      )
   const sum = myArray.map(number => number * number).reduce((number, acc) => number + acc, 0)
        
       (sum < 8000) ? resolve(sum) : reject()
   })

    myPromise
       .then(sum => [2, 3, 5, 10].map(number => sum / number))
       .catch(() => console.log(`Promise rejeitada`))
}

fetchPromise()
