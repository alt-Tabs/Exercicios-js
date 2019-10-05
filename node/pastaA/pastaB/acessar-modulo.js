const moduloA = require('../../moduloA') // acessa pastas internas
console.log(moduloA.ola)

//importação de modulo http

const http = require('http') //modulo interno do node, n precisa de caminho relativo
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)