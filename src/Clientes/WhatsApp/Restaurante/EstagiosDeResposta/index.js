let stages = {
    0: {
        descricao: "Boas Vindas",
        obj: require("./Estagios/BemVindo.js"),
    },
    1: {
        descricao: "Pega o nome do cliente",
        obj: require("./Estagios/NomeCliente.js"),
    },
    2: {
        descricao: "Envia o Cardápio",
        obj: require("./Estagios/EnviaCardapio.js"),
    },
    3: {
        descricao: "Carrinho",
        obj: require("./Estagios/Carrinho.js"),
    },
    4: {
        descricao: "Observação",
        obj: require("./Estagios/Observacao.js"),
    },
    5: {
        descricao: "Pergunta se é para entrega",
        obj: require("./Estagios/Entrega.js"),
    },
    6: {
        descricao: "Pergunta o endereço",
        obj: require("./Estagios/Endereco.js"),
    },
    7: {
        descricao: "Forma de pagamento",
        obj: require("./Estagios/FormaDePagamento.js"),
    },
    8: {
        descricao: "Encerramento",
        obj: require("./Estagios/Encerramento.js"),
    },

};

exports.step = stages;