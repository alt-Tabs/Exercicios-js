const porta = 3003

const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados= require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true})) //// bodyParser= função middleware que faz parse no body da requisição | urlencoded= interpretador do postman

app.get('/produtos', (req, res, next) => { //lista q retorna os produtos
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next) =>{// :id = parametro = "req"
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post ('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put ('/produtos/:id', (req, res, next) =>{ //alterar
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete ('/produtos/:id', (req, res, next) =>{ //alterar
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta,()=>{
    console.log(`Servidor está executando na porta ${porta}`)
})