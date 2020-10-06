/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */ 

 /*//Exercício 1
//Bem vindo(a)
console.log("Bem vindo(a) ao BlackJack!")*/

/*Exercício 2,3 e 4
//condição if else
if(confirm("Deseja iniciar uma nova rodada?")){
    //soma das cartas
const somaCartas = Number(valorCartaUsuario1)+ Number(valorCartaUsuario2)
//resultado
   console.log(`Usuário - cartas ${cartaUsuario1} ${cartaUsuario2} - pontuação ${somaCartas}`)

//condição else
}else{
 console.log("Que pena, o jogo acabou.")
}

//Exercício 6
//Bem vindo(a)
console.log("Bem vindo(a) ao BlackJack!")
//condição if else
if(confirm("Deseja iniciar uma nova rodada?")){
    //soma das cartas
const somaCartas = Number(valorCartaUsuario1)+ Number(valorCartaUsuario2)
//resultado
   console.log(`Usuário - cartas ${cartaUsuario1}  - pontuação ${somaCartas}`)
   console.log(`Usuário 2 - cartas ${cartaUsuario2} - pontuação ${somaCartas}`)
//condição else
}else{
 console.log("Que pena, o jogo acabou.")
}


*/ 


 
 //jogador1
const carta = comprarCarta()
const cartaUsuario1 = carta.texto
const valorCartaUsuario1 = carta.valor
//jogador2
const carta2 = comprarCarta()
const cartaUsuario2 = carta.texto
const valorCartaUsuario2 = carta2.valor



