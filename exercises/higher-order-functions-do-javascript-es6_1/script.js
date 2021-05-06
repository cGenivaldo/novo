// const newEmployees = (generator) => {
//     const employees = {
//       // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
//       id1: generator('Pedro Guerra'),
//       // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
//       id2: generator('Luiza Drumond'),
//       // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
//       id3: generator('Carla Paiva')
//     }
//     return employees;
//   };

//   const generator = (fullName) => {
//     const email = fullName.toLowerCase().split(' ').join('_')
//     return {fullName, email: `${email}@betrybe.com`};
//   }

//   console.log(newEmployees(generator))

