const cardapio = require("../../Cardapio/cardapio");
const banco = require("../../Banco/banco");

function execute(user, msg, contato) {
    if (msg.toUpperCase() == "SIM") {
        banco.db[user].stage = 2;
        return [
            `Por favor, qual o seu nome?`,
        ];
    }
    if (msg.toUpperCase() == "NÃO") {
        banco.db[user].stage = 0;
        return [
            `Certo, se precisar de algo estaremos aqui.
O Restaurante agradeçe seu contato.
Até mais. 👋🏻`,
        ];
    }

}

exports.execute = execute;