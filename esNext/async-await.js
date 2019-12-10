const http = require('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject)=>{ //promisse recebe uma função com 2 parametros (resolve e reject)
        http.get(url, res =>{
            let resultado = ''
    
            res.on('data',dados =>{
                resultado += dados
            })
    
            res.on('end',()=>{
               try{
                   resolve(JSON.parse(resultado))
               } catch(e){
                   reject(e)
               }
            })
        })
    })

}

//Recurso do ES8
//Objetivo de simplificar o uso de promise
//a função await só funciona na presença de um async

let obterAlunos = async ()=> {
    const tA = await getTurma('A')
    const tB = await getTurma('B')
    const tC = await getTurma('C')
    return[].concat(tA,tB,tC)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))