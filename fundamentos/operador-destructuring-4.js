function rand([min=0, max= 1000]){
    if (min>max) [min, max]= [max, min]
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor) //floor= arredonda p baixo/ ceil=arredonda p cima

}
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))//assume 0-1000
console.log(rand())// erro