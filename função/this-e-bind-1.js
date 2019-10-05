const pessoa ={
    saudacao: 'Bom dia!',
    falar(){ // isso é uma função criada a partir de metodos novos ec15,usada em objetos
        console.log(this.saudacao)
    }
}
pessoa.falar()


const falar = pessoa.falar
falar()// conflito de paradigmas: funcional e OO


const falarDePessoa = pessoa.falar.bind(pessoa) //bind = amarra um metodo a um objeto
falarDePessoa()