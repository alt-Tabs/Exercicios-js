//Armazenando uma função em uma variavel

const imprimirSoma= function(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)


//Armazenando uma função arrow em uma variavel

const soma = (a,b) => {     //=> = function (nome: arrow function)
     return a + b

}
console.log(soma(2, 3))


//Retorno implícito

const subtracao = (a, b) => a-b 
/* quando não se faz um bloco com as chaves,
 entende-se que executa uma unica sentença de código*/

 console.log(subtracao(2, 3))


 const imprimir2 = a => console.log(a)
 imprimir2('Legal!!')