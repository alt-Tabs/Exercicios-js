const contadorA = require ('./instancia-unica')
const contadorB = require ('./instancia-unica') 

const contadorC = require ('./instancia-nova')()//()tem q usar para poder retornar a funcão factory
const contadorD = require ('./instancia-nova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)//simplesmente exportou o objeto do node,  valor alterado por causa do cache, contador a e b possuem a msm instancia


contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)//novas instancias criadas a partir de uma factory 

