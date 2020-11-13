const cardapio = require("../../Cardapio/cardapio");
const banco = require("../../Banco/banco");

function execute(user, msg) {
    if (msg.toUpperCase() == "CANCELAR") {
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg.toUpperCase() == "FINALIZAR") {
        banco.db[user].stage = 4;
        return ["Estamos fechando seu pedido, ok?"];
    }

    if (!cardapio.menu[msg.toUpperCase()]) {
        return [
            "Digite *'FINALIZAR'* para finalizar ou *'CANCELAR'* para cancelar",
            "Código inválido, digite corretamente",
        ];
    }

    banco.db[user].itens.push(cardapio.menu[msg.toUpperCase()]);
    return [
        "Digite *'FINALIZAR'* para finalizar os pedidos",
        `Item(${cardapio.menu[msg].produto}) adiconado com sucesso`,
    ];
}

exports.execute = execute;