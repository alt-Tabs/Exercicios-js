const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4]= 10
console.log(valores)
console.log(valores.length)//tamanho do array

valores.push({id:3}, false, null,"teste")//adicionar valores no array
console.log(valores)

console.log(valores.pop())// exclui o ultimo valor do array
delete valores[0]// deleta um valor, indice indicado entre colchetes
console.log(valores)

console.log(typeof valores)// retorna object (um array em js é um objeto)

