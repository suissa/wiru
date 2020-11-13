const cardapio = require("../../Cardapio/cardapio");
const banco = require("../../Banco/banco");

function execute(user, msg, contato) {
    banco.db[user].stage = 6;

    return [
        `Ok, você deseja que entregue? É só digitar *ENTREGAR*
A taxa é R$ 7,00
Para retirar no Balcão é só digitar *RETIRAR*.`,
    ];
}

exports.execute = execute;