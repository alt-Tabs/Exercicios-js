function Pessoa() {
    this.idade = 0

    setInterval(function(){ // dispara um intervalo de tempo que a função vai se repetir
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // 1 seg
}

new Pessoa

//-------------------------------------------

function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function(){ // dispara um intervalo de tempo que a função vai se repetir
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // 1 seg
}

new Pessoa