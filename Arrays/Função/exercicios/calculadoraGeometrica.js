let menu = ""

function areaTriangulo(base, altura) {
    return base * altura / 2
}

function areaRetangulo(base, altura) {
    return base * altura
}
function areaQuadrado(lado) {
    return lado * lado
}
function areaTrapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2
}
function areaCirculo(raio) {
    return Math.PI * raio * raio
}

do {
    menu = prompt(`Escolha a operação que gostaria de realizar: 
    \n1- Calcular a área do triângulo:
    \n2- Calcular a área do retângulo:
    \n3- Calcular a área do quadrado:
    \n4- Calcular a área do trapézio:
    \n5- Calcular a área do círculos:
    \n6- Sair.`)
    switch (menu) {
        case "1": 
            let baseTriangulo = +prompt("Escreva a base do triângulo: ")
            let alturaTriangulo = +prompt("Escreva a altura do triângulo: ")
            "A área do triâgulo é de: " + alert(areaTriangulo(baseTriangulo, alturaTriangulo))
            break

        case "2":
            let baseRetangulo = +prompt("Escreva a base do retângulo: ")
            let alturaRetangulo = +prompt("Escreva a altura do retângulo:")
            "A área do retângulo é de: " + alert(areaRetangulo(baseRetangulo, alturaRetangulo))
            break
        case "3":
            let ladoQuadrado = +prompt("Escreva o lado do quadrado: ")
            "A área do quadrado é de: " + alert(areaQuadrado(ladoQuadrado))
            break
        case "4":
            let baseMaiorTrapezio = +prompt("Escreva a base maior do trapezio: ")
            let baseMenorTrapezio = +prompt("Escreva a base menor do trapezio: ")
            let alturaTrapezio = +prompt("Escreva a altura do trapezio:")
            "A área do trapezio é de: " + alert(areaTrapezio(baseMaiorTrapezio, baseMenorTrapezio, alturaTrapezio ))
            break
        case "5":
            let raioCirculo = +prompt("Escreva o raio do círculo: ")
            "A área do círculo é de: " + alert(areaCirculo(raioCirculo))
            break
        case "6":
            alert("Saindo...")
            break
    }
} while (menu !== "6")