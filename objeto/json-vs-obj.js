const obj = {a:1 , b:2 , c:3 , soma (){return a+b+c}}
console.log(JSON.stringify(obj))// passa o objeto para Json

//console.log(JSON.parse("{a:1, b:2, c:3}"))
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))//todos os nomes dos atributos em json devem ser delimitados
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))//passa Json para objeto
console.log(JSON.parse('{"a":1.7,"b":"string", "c": true, "d":{}, "e":[]}'))
