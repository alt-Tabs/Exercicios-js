const schedule = require ('node-schedule') //extensão para node instalada 

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 3', function(){ // de 5 em 5 segundos, 12 horas *= ignorando mes e ano *2= terça feira[0-domingo, 1-segunda etc]
    console.log('Executando Tarefa 1!', new Date().getSeconds())
}) 

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)// 20000= para a tarefa depois de 20 segundos

//funções que fazem isso no JS= setInterval , setImmediate

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 16
regra.second= 30

const tarefa2 = schedule.scheduleJob (regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})