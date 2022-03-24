
function escolhadoJogador(escolha) {
    var escolha = prompt(`1. Investigar mais a fundo ? 
2. Ser cetico !!`)
 while (true) {
 if (escolha == 1) {
     alert("Grande investigador !!")
     window.location ="Tfase3.html"
     break;
     
 } else if (escolha == 2) {
     alert("Não e hora de ingnorar suspeitos!!")
     escolha = prompt(`1. Investigar mais a fundo ? 
2. Ser cetico !!`)
 } else{
     alert("Ops vamos tentar outra vez!!")
     escolha = prompt(`1. Investigar mais a fundo ? 
2. Ah que assustador !!`)
 }
 }
 }
 