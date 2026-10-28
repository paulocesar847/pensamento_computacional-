// let nome = "Paulo"
// let idade = 16
// let cidade = "Londrina"
// let time = "Flamengo"
// let comida = "pizza"
// let peso = 65
// let altura = 1.84
// console.log("Olá eu me chamo " + nome + ", tenho " + idade + " anos de idade, tenho " + altura + " de altura e peso " + peso + " quilos aproximadamente, torço para o " + time + ", gosto muito de comer " + comida + " e moro em " + cidade + ".")
// const valorMinimo = 50
// const subtotal = 49
// const resultado = subtotal > valorMinimo
// console.log(resultado)

// if(idade >= 18) {
//     console.log("Sou maior de idade.")
// } else if (idade < 18) {
//     console.log("Sou menor de idade.")
// }

// let pontos = 3400
// let vitórias = 10
// if(pontos >= 0 && pontos <= 800) {
//     patente = "Bronze"
// } else if(pontos >= 800 && pontos < 1300) {
//     console.log("Prata")
// } else if(pontos >= 1300 && pontos < 1800) {
//     console.log("Ouro")
// } else if(pontos >= 1800 && pontos < 2300) {
//     console.log("Platina")
// } else if(pontos >= 2300 && pontos < 2800) {
//     console.log("Diamante")
// } else if(pontos >= 2800 && pontos < 3500) {
//     console.log("Mestre")
// }

// let numero = 2

// gerarTabuada(numero)

// function gerarTabuada(numero){
//     for(let i = 1; i <= 10; i++){
//         console.log(i*numero)
//     }
// }

let peso = parseFloat(prompt("Digite o seu peso (Kg): "))
let altura = parseFloat(prompt("Informe a sua altura (m): "))
gerarRelatorio(peso, altura)

let resultado = calcularIMC(peso, altura)

function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

function classificarIMC(resultado){
    if(resultado < 18.5){
        alert("Abaixo do peso: " + resultado)
    } else if(resultado > 18.5 && resultado < 24.9){
        alert("Peso normal: " + resultado)
    } else if(resultado > 25 && resultado < 29.9){
        alert("Acima do peso: " + resultado)
    } else if(resultado > 30 && resultado < 34.9){
        alert("Obesidade 1: " + resultado)
    } else if(resultado > 35 && resultado < 39.9){
        alert("Obesidade 2: " + resultado)
    } else if(resultado > 40 || resultado == 40){
        alert("Obesidade 3: " + resultado)
    }
}

function gerarRelatorio(peso, altura){
    let imc = calcularIMC(peso, altura)
    classificarIMC(imc)

}