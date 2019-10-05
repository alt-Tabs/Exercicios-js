// Object.preventExtensions - bloqueia a atribuição de novos valores mas permite e alteração doa que ja possuem e tb a exclusao de atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome:'Juliana', idade: 35}
Object.seal(pessoa)// seal= n adiciona atributo, n exclui, consegue apenas modificar os atributos existentes
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' 
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes (n inclui, n exclui, n modifica)
