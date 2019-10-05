// anotação literal de objeto

const prod1={}//um par de chaves é a forma literal de escrever um 
prod1.nome= 'celular ultra mega'
prod1.preco= 4998.90
prod1['Desconto legal']= 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2= {
    nome: 'camisa polo',
    preco: 79.90,
        /* obj:{
            blablabla: 1,
            obj:{
                blabla: 2,
            }
         }*/
}
//exemplo json(javascript object notation): formato textual do objeto | NÃO É OBJETO
'{"nome": "camisa polo","preco":79.90}'
