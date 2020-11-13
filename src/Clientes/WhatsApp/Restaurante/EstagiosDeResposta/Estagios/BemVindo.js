const cardapio = require("../../Cardapio/cardapio");
const banco = require("../../Banco/banco");

function execute(user, msg, contato) {
    banco.db[user].stage = 1;

    return [
        `Olá Bem vindo(a) a Pizzaria. 🍕
Gostaria de fazer um pedido?
Digite Sim ou Não.`,
    ];
}

exports.execute = execute;