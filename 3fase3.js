
function escolhadoJogador(escolha) {
    var escolha = prompt(`1. Prender o Suspeito ? 
2. Deixar ele fugir ?`)
 while (true) {
 if (escolha == 1) {
     alert("Grande Trabalho Tree!!")
     window.location = ("Win.html")
     break;
     
 } else if (escolha == 2) {
     alert("Você cometeu um erro detetive !!")
     escolha = prompt(`1. Prender o suspeito ? 
2. Deixar ele fugir ?`)
 } else{
     alert("Ops vamos tentar outra vez!!")
     escolha = prompt(`1. Prender o suspeito ? 
2. Deixar ele escapar ?`)
 }
 }
 }
 