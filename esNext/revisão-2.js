//Arrow Function
const soma = (a,b) => a+b //return implicito, será explicito quando os valores forem definidos dentro de um bloco
console.log(soma(2,3))

//Arrow Function (this) //this (em arrow function)= local no qual a função foi escrita
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) //forçar ---n funciona
lexico1() //aponta para this
lexico2() //aponta para this-exports

//parametros defaults
function log(texto ='Node'){
    console.log(texto)
}
log()
log('Sou mais forte')


//operador rest
function total (...numeros) {
    let total =0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))
