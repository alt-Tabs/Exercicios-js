Array.prototype.forEach2 = function(callback){
    for(let i=0 ; i< this.length ; i++){
        callback(this[i], i, this)
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){//indice sempre é o segundo paramentro
    console.log(`${indice + 1}) ${nome}`)
})
