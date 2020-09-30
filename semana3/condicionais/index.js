
/* Exercício 1 testa se o número que for digitado é par ou não. Caso seja par, você passa no teste, caso não, você é reprovado*/

/* Exercício 2
a)Este código imprime para o usuário/cliente qual valor do produto escolhido.
b)O preço da fruta maçã é R$2,25
c)Imprime o primeiro valor, então o default foi usado para um reajuste de preço deste produto.
*/

/* Exercício 3
a) Transformando uma string em número, caso o usuário digite o número por extenso.
b)O número passa no teste caso seja maior que 0. Como não há outra condição se o usuárui digitasse um número negativo, o programa dá erro.
c) Com cereteza haverá erro, pois está fora do bloco if, então proprama não imprimirá nenhuma mensagem pois não há nenhuma mensagem.
*/

//Exercício 4
let idade = Number(prompt("Qual sua idade?"))

 if(idade>=18){
    console.log("Você pode dirigir!")
}else {
    console.log("Você não pode dirigir =(")
}

//Exercício 5

const turno = prompt("Qual período em que você estuda?(M)atutino / (V)espertino / (N)oite").toUpperCase()


 if(turno === "M"){
    console.log("Bom dia!") 
}else if(turno === "V"){
    console.log("Boa tarde!")
}else if(turno === "N") {
    console.log("Boa noite!")
}

//Exercício 6

switch(turno){
    case 'M':
        msg = "Bom dia!"
        break
        case 'V':
        msg = "Boa tarde!"
        break
        case 'N':
            msg = "Boa noite!"
            break
            default:
                msg = "Inválido, tente novamente."
                break
}

//Exercício 7


const genero = prompt("Qual o gênero do filme que vocês irão assistir? ")
const preco = prompt("Qual o preço do ingresso?")

if(genero === "fantasia" && preco <= 15 ){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme =´(")
}



 
 

