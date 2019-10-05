console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados= ['Bia', 'Carlos', 'Ana']//preferivel usar - notação literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//undefined

aprovados[3]= 'Paulo'//mais usado para substituir o valor de um indice
aprovados.push('Abia')//usado para adicionar um elemento no array(entra como ultimo elemento)
console.log(aprovados.length)

aprovados[9]= 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]=== undefined)

console.log(aprovados)
aprovados.sort()//ordena o array
console.log(aprovados)

delete aprovados [1] //vai ficar como undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados= ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)//primeiro param é o indice a ser trabalhado, o segundo exclui, o ' ' adiciona
console.log(aprovados)
