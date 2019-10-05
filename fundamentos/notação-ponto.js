console.log(Math.ceil(6.1)) // ceil = opera arredondamento

const obj1 ={}
obj1.nome = 'Bola'
//obj1['nome']= 'Bola2' (sobrescreve o atributo 'nome')
console.log(obj1.nome)

function Obj (nome){
    this.nome = nome // this= o nome associado a função se tornará publico
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

