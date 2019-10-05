//pessoa--> 123-->{...}
const pessoa ={ nome: 'Joao'} //aqui atribuimos um novo valor para o objeto em uma constante
pessoa.nome= 'Pedro'
console.log(pessoa)

//pessoa--> 456--> {...}
//pessoa = { nome:'Ana'} //o que não se pode é atribuir novas constantes ao objeto
 
Object.freeze(pessoa) //torna 'pessoa' inalterável

pessoa.nome= 'Maria'
pessoa.end = 'Rua ABC'S
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome ='Maria'
console.log(pessoaConstante)