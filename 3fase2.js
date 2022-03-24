
function escolhadoJogador(escolha) {
    var escolha = prompt(`1. Interrogar o Suspeito ? 
2. Aguardar ?`)
 while (true) {
 if (escolha == 1) {
     alert("Grande investigador !!")
     window.location ="3fase3.html"
     break;
     
 } else if (escolha == 2) {
     alert("Não e hora de ingnorar suspeitos!!")
     escolha = prompt(`1. Interrogar o Suspeito ? 
2. Aguardar ?`)
 } else{
     alert("Ops vamos tentar outra vez!!")
     escolha = prompt(`1. Interrogar o Suspeito ? 
2. Aguardar ?`)
 }
 }
 }
 