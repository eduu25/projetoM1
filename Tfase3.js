
function escolhadoJogador(escolha) {
    var escolha = prompt(`1. Prender lord Helsing ? 
2. Deixar ele escapar !!`)
 while (true) {
 if (escolha == 1) {
     alert("Grande Trabalho Two!!")
     window.location = ("Win.html")
     break;
     
 } else if (escolha == 2) {
     alert("Você cometeu um erro detetive !!")
     escolha = prompt(`1. Prender lord Helsing ? 
2. Deixar ele escapar !!`)
 } else{
     alert("Ops vamos tentar outra vez!!")
     escolha = prompt(`1. Prender lord Helsing ? 
2. Deixar ele escapar !!`)
 }
 }
 }
 