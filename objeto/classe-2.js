class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)//super= seta para funcao construtora da super classe, no caso Avo
        this.profissao = profissao
    }
    
}
class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)