//Função em JS é First-Class Object (Citizens)
//Higher-order function 

//criar de forma literal:
function fun1(){} // a função pode ou não receber parametros, uso de bloco de codigo obrigatorio
    // uma função sempre vai retornar undefined, a não ser que vc use return

//armazenar em uma variável
const fun2 = function(){}
//função anonima atribuida a uma constante

//armazenar em um array
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em atributo de objeto
const obj ={}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Passar função como parâmetro
function run (fun){
    fun()
}
run (function(){console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma (a, b){
    return function (c){
        console.log(a + b+ c)
    }
} soma(2, 3)(4) // OU
                //soma (2,3)(4) 
                //const cincoMais= (2,3)
                //cincoMais(4)

