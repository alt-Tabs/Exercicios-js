function tratarErroELancar(erro){
   // throw new Error('...') //espera-se buscar o erro abaixo, foi criada uma função para tratar o erro (throw = relança um erro)
    // throw 10
    // throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date,
    }

}   

function imprimirNomeGritado(obj) {
    try{ // try= bloco de codigo que julga se pode haver algum erro
    console.log(obj.name.toUpperCase()+'!!!')
    } catch(e){//caso gere algum erro o catch pega o erro e o trata. ex: msg pro usuario
        tratarErroELancar(e)
    } finally{ // bloco que será executado mesmo se ocorrer erro
        console.log('final')
    }
}

const obj = { nome: 'Roberto'} //nome e name foram colocados errado de propósito para poder evidenciar o erro
imprimirNomeGritado(obj)


//podemos usar o try e catch para tratar erros como 500 por exemplo