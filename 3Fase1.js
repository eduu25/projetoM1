

function escolhadoJogador(escolha) {
   var escolha = prompt(`1. Investigar os furtos ? 
2. Esperar mais informações ?`)
while (true) {
if (escolha == 1) {
    alert("Vamos Resolver Esse caso !!")
    window.location = "3fase2.html"
    break;
    
} else if (escolha == 2) {
    alert("Não ah tempo para esperar ??")
    escolha = prompt(`1. Investigar os furtos ? 
2. Esperar mais informações ?`)
} else{
    alert("Ops vamos tentar outra vez!!")
    escolha = prompt(`1. Investigar os furtos ? 
2. Esperar mais informações ?`)
}
}
}

