
function escolhadoJogador(escolha) {
    var escolha = prompt(`1. Investigar mais a fundo ? 
2. Ah que assustador !!`)
 while (true) {
 if (escolha == 1) {
     alert("Muito bem investigador estamos quase lá !!")
     window.location ="fase3.html"
     break;
     
 } else if (escolha == 2) {
     alert("Não tenha medo está quase no fim da jornada !!")
     escolha = prompt(`1. Investigar mais a fundo ? 
2. Ah que assustador !!`)
 } else{
     alert("Ops vamos tentar outra vez!!")
     escolha = prompt(`1. Investigar mais a fundo ? 
2. Ah que assustador !!`)
 }
 }
 }
 