const cardapio = require("../../Cardapio/cardapio");
const banco = require("../../Banco/banco");

function execute(user, msg, contato) {

    banco.db[user].stage = 8;
    let resumo = "  RESUMO DO PEDIDO \n";
    let total = 0;
    banco.db[user].itens.forEach((value) => {
        console.log(value);
        resumo += `${value.produto} - R$${value.preco} \n`;

        total += parseFloat(value.preco);
    });
    resumo += "-------------------------\n";
    resumo += ` Total R$ ${total}`;
    return ["Para confirmar digite # ou para cancelar digite *", resumo];
}

exports.execute = execute;