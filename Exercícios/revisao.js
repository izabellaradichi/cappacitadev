const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function numerosPares(array){
//     let arrayNova = []
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             arrayNova.push(array[i])
//         }
//     }
//     return arrayNova
// }

function numerosPares(array){
    return array.filter(num => num % 2 == 0)
}

console.log(numerosPares(numeros))