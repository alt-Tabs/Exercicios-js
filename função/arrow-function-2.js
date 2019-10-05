function Pessoa (){
    this.idade = 0

    setInterval (() =>{
        this.idade++  // this não varia de acordo com quem está chamando, usando arrow function
        console.log(this.idade)
    }, 1000)
}

new Pessoa