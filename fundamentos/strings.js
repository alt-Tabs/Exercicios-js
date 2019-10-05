const escola = "Cod3r"

console.log(escola.charAt(4))// CharAt = Pega determinado caractere em uma string 
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // tabela unicode charCodeAt codigo do caractere(usado para caractere especial, por exemplo acentos)
console.log(escola.indexOf('3')) // indice apartir do caractere

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // chamada usando indices

console.log('Escola ' .concat(escola).concat('!'))// pode usar + ao inves de concat
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'). split('.')// split= delimita