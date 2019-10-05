console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports)
console.log(this === exports)//fora de uma função === true

function logThis(){
    console.log('Dentro de uma função..!')
    console.log(this === exports)//false
    console.log(this === module.exports)
    console.log(this === global) // this em uma função aponta para escopo global
}

logThis()
