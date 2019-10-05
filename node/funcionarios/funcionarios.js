
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')//axios= client http/ faz requisições pra obter informações de servidores remotos

const chineses = f => f.pais ==='China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual)=> {
    return func.salario > funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data //data= lista de funcionarios no caso, se refere ao conteudo http
    //console.log(funcionarios)

// exercicio: buscar a mulher chinesa com menor salario

const func = funcionarios
    .filter (chineses)
    .filter (mulheres)
    .reduce (menorSalario)

console.log(func)

})

//npm install ou npm i instala as dependencias do arquivo json
//pwd mostra a pasta que esta sendo acessada
// cd "pasta" adentra a pasta
//para que não fique exposto, vc pode usar a pasta .gitignore para ocultar o arquivo node modules
// npm start (qnd definido na criação do arquivo modules) inicia a execução do arquivo json no terminal
//comandos defaults : npm start, npm test
// para iniciar com comando definido no script usa-se npm run "dev", por exemplo
 