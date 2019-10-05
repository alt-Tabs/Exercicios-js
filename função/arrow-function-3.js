let comparaComThis = function (param){
    console.log (this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow (global)
comparaComThisArrow(module.exports)

comparaComThisArrow= comparaComThisArrow.bind(obj) // não funciona
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//this em função aponta para global (pode variar)
//this em arrow function é um this associado no contexto ao qual a função foi escrita

