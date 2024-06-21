let menu = ""
let vagas = []
function listarVagas() {
    for (let i = 0; i < vagas.length; i++) {
        alert((i + 1) +
            "\n indice da vaga:" + i +
            "\n nome da vaga:" + vagas[i].nome +
            "\n descrição da vaga:" + vagas[i].descricao +
            "\n quantidade de candidatos inscritos:" + vagas[i].candidatos.length
        )
    }
}
function criarVaga() {
    let vaga = {}
    vaga.candidatos = []
    vaga.nome = prompt("Qual o nome para a vaga?")
    vaga.descricao = prompt("Faça uma breve descrição da vaga:")
    alert("confirme os dados da vaga:\n Nome da vaga: " + vaga.nome + "\nDescrição da vaga: " + vaga.descricao)
    vagas.push(vaga)
}
function visualizarVaga() {

}
function inscreverCandidato() {
    let candidato = {}
    candidato.nome = prompt("Digite seu nome completo:")
    let indice = prompt("Informe o índice da vaga que deseja se candidatar:")
    alert("Confirme seus dados para a inscrição: \nNome:" + candidato.nome + "\n indice da vaga:" + indice)
    vagas[indice].candidatos.push(candidato)

}
function excluirVaga() {
    indice = prompt("informe o indice da vaga que deseja excluir:")
    alert("deseja excluir esta vaga?" + "\nNome da vaga: " + vagas[indice].nome + "\nDescrição da vaga: " + vagas[indice].descricao)
    vagas.splice(indice)
}
do {
    menu = prompt(`Escolha uma das alternativas:
        \n 1.Listar vagas disponíveis
        \n 2.Criar um nova vaga
        \n 3.Visualizar uma vaga
        \n 4.Inscrever um candidato em uma vaga
        \n 5.Excluir uma vaga
        \n 6.Sair`)
    switch (menu) {
        case "1":
            listarVagas()
            break
        case "2":
            criarVaga()
            break
        case "3":

            break
        case "4":
            inscreverCandidato()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert("Saindo...")
            break

    }
} while (menu !== "6")

