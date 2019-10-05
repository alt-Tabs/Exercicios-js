const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){//indice sempre é o segundo paramentro
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)//armazenar função em uma variavel
aprovados.forEach(exibirAprovados)

//o terceiro paramentro do forEach é o proprio array
