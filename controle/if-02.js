function teste1(num){
    if (num>7) // sem as chaves executa apenas a 1 sentença de codigo
    console.log(num) 

    console.log('Final')// vai ser executada de qq maneira pois sem as chaves essa sentença não entra no bloco de condições if
}

teste1(6)
teste1(8)

function teste2(num){//codigo errado
    if(num > 7)
    ;// sentença de codigo vazia, não usar com bloco if
     {
        console.log(num)// não esta associado ao if
    }
} // então como não filtra nada ele imprime os dois valores

teste2 (6)
teste2 (8)