let fila = [];
let menu = ""
let novoPaciente = "";

do {
    menu = prompt("Fila: " + fila + "\n" + "\nEscolha entre as opções abaixo: \nPara adicionar um novo paciente ao fim da fila escreva 'Novo paciente' \nPara retirar o primeiro da fila e ser consultado escreva 'Consultar paciente' \nSe deseja finalizar a sessão escreva 'sair'.");
    switch (menu) {

        case "Novo paciente":
            let novoPaciente = prompt("Escreva o seu nome para entrar na fila: ")
            fila.push(novoPaciente)
            break

        case "Consultar paciente":
            fila.shift(0)
            break
    }
}
while(menu !== "sair")