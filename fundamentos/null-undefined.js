let valor //não inicializada
console.log(valor)

valor=null //ausencia de valor, sem local na memoria
console.log(valor)
//console.log(valor.toString())//Erro! Não se acessa nulos

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco= 3.50
console.log(produto)

produto.preco= undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco = forma correta de remover um atributo de um objeto
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)