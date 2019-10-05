function getPreco (imposto= 0, moeda='R$'){
    return `${moeda} ${this.preco *(1-this.desc)* (1 + imposto)} `
}
 const produto ={
     nome: 'Notebook',
     preco: 4589,
     desc: 0.15,
     getPreco

 }
 global.preco= 20
 global.desc = 0.1
 console.log(getPreco())// vai dar NaN pq o this em global n foi definido
console.log(produto.getPreco()) //funciona pq vai atraves do objeto



const carro= {preco:49990, desc :0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// a diferença entre call e apply é a forma de passar os parametros
console.log(getPreco.call(carro, 0.17, '$'))// primeiro parametro é sempre o contexto
console.log(getPreco.apply(global,[0.17, '$'])) // os parametros vão dentro de um array
