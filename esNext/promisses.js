function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve (frase)// aceita um unico parametro
        },segundos *1000)
    })
}
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) // .then = acessa resultado de uma promisse atendida corretamente
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //trata o erro em uma promisse