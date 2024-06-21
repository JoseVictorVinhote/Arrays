let menu = ""
let imoveisCadastrados = []


do {
    let informacoesImovel = {
        
    }
    menu = prompt("Imóveis cadastrados: " + imoveisCadastrados.length +
        "\n1- Salvar um novo imóvel: \n2- Mostrar todos os imóveis: \n3- Sair.")
    switch (menu) {
        case "1":
            informacoesImovel.nomeDoProprietario = prompt("Escreva o seu nome:")
            informacoesImovel.quantidadeDeQuartos = prompt("Qual a quantidade de quartos?")
            informacoesImovel.quantidadeDeBanheiros = prompt("Qual a quantidade de banheiros?")
            informacoesImovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")
            imoveisCadastrados.push(informacoesImovel)
            break
        case "2":
            for (let i = 0; i < imoveisCadastrados.length; i++) {
                alert((i + 1) + "° imóvel" +
                    "\n Nome do proprietário: " + imoveisCadastrados[i].nomeDoProprietario +
                    "\n Quantidade de quartos: " + imoveisCadastrados[i].quantidadeDeQuartos +
                    "\n Quantidade de banheiros: " + imoveisCadastrados[i].quantidadeDeBanheiros +
                    "\n Possui garagem?: " + imoveisCadastrados[i].garagem)
            }
            break
        case "3":
            alert("Saindo...")
            break

    }
} while (menu !== "3")