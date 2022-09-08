function Converter(){

    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    // está convertendo o valor do input que vem em string para float
    var valorEmRealFloat = parseFloat(valor)
    var valorEmDolar = valorEmRealFloat * 5.25

    var conversaoValor = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$" + valorEmDolar

    conversaoValor.innerHTML = valorConvertido

}