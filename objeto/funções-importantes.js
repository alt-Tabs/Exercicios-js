const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))//pega as chaves do objeto
console.log(Object.values(pessoa))// pega os valores
console.log(Object.entries(pessoa))// retorna array com a chave e o valor

Object.entries(pessoa).forEach(([chave,valor]) =>{// destructuring (tira do array)
    console.log(`${chave}:${valor} `)
})

Object.defineProperty(pessoa, 'dataNascimento',{//define de forma mais completa, permite mais controle
    enumerable:true,
    writable: false,
    value: '01/01/2019'
})// funciona parecido com o freeze

pessoa.dataNascimento = '01/01/2017'//não vai entrar pois o valor esta congelado, se mudarmos writeable para true, ai sim esse valor podera sobrepor a data inicial
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))// vai pegar a data de nascimento e colocar no array pois 'enumerable' esta true, se estiver false 'dataNascimeto' não aparecerá no array

//object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj= Object.assign(dest, o1, o2)//assign = o primeiro atributo vai ser um objeto destino onde será concatenado todos os outros objetos seguintes
console.log(dest)

Object.freeze(obj)
obj.c= 1234
console.log(obj)