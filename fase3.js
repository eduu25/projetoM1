
function escolhadoJogador(escolha) {
    var escolha = prompt(`1. Conter as criaturas ? 
2. Fujam para as colinas !!`)
 while (true) {
 if (escolha == 1) {
     alert("você e uma verdadeira lenda!!")
     window.location = ("Win.html")
     break;
     
 } else if (escolha == 2) {
     alert("Não e Hora para fugir !!")
     escolha = prompt(`1. Conter as criaturas ? 
2. Fujam para as colinas !!`)
 } else{
     alert("Ops vamos tentar outra vez!!")
     escolha = prompt(`1. Conter as criaturas ? 
2. Fujam para as colinas !!`)
 }
 }
 }
 