

function escolhadoJogador(escolha) {
   var escolha = prompt(`1. Investigar o problema ? 
2. Devemos fugir ?`)
while (true) {
if (escolha == 1) {
    alert("Muito bem investigador avançe para a proxima fase !!")
    window.location = "fase2.html"
    break;
    
} else if (escolha == 2) {
    alert("Onde está seu espirito de aventura ?")
    escolha = prompt(`1. Investigar o problema ? 
2. Devemos fugir ?`)
} else{
    alert("Ops vamos tentar outra vez!!")
    escolha = prompt(`1. Investigar o problema ? 
2. Devemos fugir ?`)
}
}
}

