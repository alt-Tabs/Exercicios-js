const fs = require ('fs')// fs é uma função do node, faz referencia ao file system


const caminho = __dirname + '/arquivo.json'

//sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho,'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})


const config = require ('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname,(err, arquivos) =>{
    console.log('Consteudo da pasta...')
    console.log(arquivos)

})