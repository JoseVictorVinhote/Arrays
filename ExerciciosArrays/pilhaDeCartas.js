let baralho = [];
let carta = ""
let adicionarCarta = "";

do {
    carta = prompt("quantidade de cartas no baralho: " + baralho.length + "\nOrdem das cartas do baralho: " + baralho + "\n" + "\nPara adicionar uma carta precione '1' \nPara retirar uma carta precione '2'  \nSe deseja finalizar a sessão escreva 'sair'.");
    switch (carta) {

        case "1":
            let adicionarCarta = prompt("Qual o nome da carta que você irá adicionar? ")
            baralho.unshift(adicionarCarta)
            break

        case "2":
            baralho.shift()
            break
    }
}
while (carta !== "sair")

    