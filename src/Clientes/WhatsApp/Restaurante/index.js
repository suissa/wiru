const wiru = require('venom-bot');
const fs = require('fs');
const express = require("express");
const cors = require('cors');
const banco = require('./Banco/banco');
const stages = require('./EstagiosDeResposta/index.js');

function ExecutarRestaurante() {
    //-------------------------------------------------   Cliente 1   --------------------------------------------------------------
    const cliente1 = "Restaurante";
    const portaRestaurante = 1000; //Porta que o restaurante irá utilizar.
    let app1 = express(); // app1 significa o primeiro app do express para o cliente numero 1
    app1.use(cors());


    //Rota de inicio http://localhost:1000/iniciar
    //Nome do cliente: Restaurante
    //Porta de uso 1000
    //-----Rotas-----
    //  Iniciar instancia = /iniciar
    //  Solicitar novo qr Code = /qrcode


    app1.get('/iniciar', (req, res) => { //Função que irá iniciar o aplicativo para o cliente
        //Função que cria a instancia do cliente.   -----> Instancia Restaurante -----> Está salvando o QRCode na pasta do cliente.
        wiru.create('Restaurante', (base64Qrimg, asciiQR) => {
            let matches = base64Qrimg.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                response = {};
            if (matches.length !== 3) { return new Error('Entrada inválida'); }
            response.type = matches[1];
            response.data = new Buffer.from(matches[2], 'base64');
            let imageBuffer = response;
            require('fs').writeFile('./src/WhatsApp/Restaurante/QRCode/qrcode.png', imageBuffer['data'], 'binary', function(err) { if (err != null) { console.log(err); } });
        }, undefined, { logQR: true }).then((restaurante) => { start(restaurante); }).catch((erro) => { console.log(erro); });
    })


    //Função para solicitar novo QrCode.
    app1.get('/qrcode', (req, res) => {
        res.sendFile(__dirname + '/QRCode/qrcode.png');
    })

    //Função que inicia o robo
    function start(restaurante) {
        restaurante.onMessage((message) => {
            let resp = stages.step[getStage(message.from)].obj.execute(
                message.from,
                message.body,
                message.sender.name
            );
            for (let index = 0; index < resp.length; index++) {
                const element = resp[index];
                restaurante.sendText(message.from, element);
            }
        });

    }

    function getStage(user) {
        if (banco.db[user]) {
            //Se existir esse numero no banco de dados
            return banco.db[user].stage;
        } else {
            //Se for a primeira vez que entra e contato
            banco.db[user] = {
                stage: 0,
                itens: [],
            };
            return banco.db[user].stage;
        }
    }

    //-----------------------------------------------Escuta da porta do cliente n° 1-------------------------------------------
    app1.listen(portaRestaurante, () => { console.log(`Servidor do ${cliente1} iniciando na porta: ${portaRestaurante}`) });
    //---------------------------------------------------------------------------------------------------------------------------

}
exports.ExecutarRestaurante = ExecutarRestaurante;