var numeroSecreto = parseInt(Math.random)

function Chutar() {
    chute = parseInt(document.getElementById("valor").value)

    console.log(chute)

    if(chute == numeroSecreto){
        console.log("acertou!")
    } else if(chute > 10 || chute < 0) {
        console.log("você deve digitar um numero de 0 a 10!")
    } else {
        console.log("Errou!")
    }
}