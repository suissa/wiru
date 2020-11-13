const cardapio = require("../../Cardapio/cardapio");
const banco = require("../../Banco/banco");

function execute(user, msg, contato) {
    let menu = `Certo *${msg}*, dê uma olhada no nosso cardápio. \n \n`;
    Object.keys(cardapio.menu).forEach((value) => {
        let element = cardapio.menu[value];
        menu += `*${value}* - *${element.produto}*\n*Descrição:* _${element.descricao}_  \n*Preço:* _R$ ${element.preco}_ \n \n`;
    });
    banco.db[user].stage = 3;
    return ["Lembrando que para adicionar os produtos no seu carrinho, basta digitar o número dele, um por vez. Exemplo: 1", menu];
}

exports.execute = execute;