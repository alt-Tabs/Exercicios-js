const anonimo = process.argv.indexOf('-a') !== -1 //verdadeiro / process =objeto global
//console.log(anonimo)

//tabata@tabata-karavel:~/Área de Trabalho/Exercícios.js/ne$ node entrada-e-saida.js -a
//Fala Anonimo

if (anonimo){
    process.stdout.write('Fala Anonimo\n') // \n = quebra de linha ,stdout= standoutput 'saida padrão' 
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace ('\n', '')

        process.stdout.write(`Fala ${nome} !!\n`)
        process.exit()
    })
}