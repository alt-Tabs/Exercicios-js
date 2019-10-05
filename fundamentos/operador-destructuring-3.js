function rand({min=0, max=1000}){// rand busca numero aleatório
    const valor= Math.random()*(max-min) + min
    return Math.floor(valor)

}
console.log(rand({max:50, min:40})) 
/* ou
const obj = {max:50, min:40}
console.log(rand(obj))*/

console.log(rand({min:955}))
console.log(rand({}))// vai de 0 a 1000 aleatorio
console.log(rand())//da erro