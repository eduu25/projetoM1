

function escolhadoJogador(escolha) {
   var escolha = prompt(`1. Investigar o problema ? 
2. Ah nem ligo ?`)
while (true) {
if (escolha == 1) {
    alert("Vamos nessa !!")
    window.location = "Tfase2.html"
    break;
    
} else if (escolha == 2) {
    alert("Ma- mas Sr Two ??")
    escolha = prompt(`1. Investigar o problema ? 
2. Ah nem ligo ?`)
} else{
    alert("Ops vamos tentar outra vez!!")
    escolha = prompt(`1. Investigar o problema ? 
2. Ah nem ligo ?`)
}
}
}

