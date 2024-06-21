const arr = ["arroz", "pedu", "feijão", "brocolis"] 
console.log(arr)


// adicionar elementos no final
// push
arr.push("salada")
console.log(arr)

//unshift adicionar elementos no começo
arr.unshift("salada")
console.log(arr)

// Remover elementos
// pop (remover no final)
const ultimoElemento = arr.pop()
console.log(ultimoElemento)

// shift (remover no começo)
const primeiroElemento = arr.shift()

//pesquisar um elemento
//includes
const inclui = arr.includes("arroz")
console.log(inclui)

//indexOf (saber a posição exata de determinado item da lista)
const indice = arr.indexOf("pedu")
console.log(indice)

// Cortar e concatenar
// slice (meio que seria o cortar do windows) (não modifica o array)
const cortar = arr.slice(0, 2)
console.log(arr)
console.log(cortar)

//concat (concatenar)
const concatenar = cortar.concat(ultimoElemento, "jose")
console.log(concatenar)

//Substituição dos elementos
// splice
const a = concatenar.splice("pedu", 1, "igor")

