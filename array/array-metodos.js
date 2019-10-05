const pilotos = ['Vettel', 'Alonso','Raikkonen', 'Massa']
pilotos.pop()//remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')//add no primeiro indice
console.log(pilotos)

//splice pode add ou remover elementos

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)// terceiro elemento, removendo 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// slice="parte"/ vai pegar um pedaço do indice 1 ao 4 (o 4 n entra)
console.log(algunsPilotos2)