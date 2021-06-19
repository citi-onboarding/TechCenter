const dotenv = require('dotenv');
const mailServer = require('../services/mailServer');

const sendMail = async (request, response, next) => {
    try {
        const { name, email, phone, message} = request.body;

        const body = `
        Nome : ${name}
        Email: ${email}
        Telefone: ${phone}
        Mensagem: ${message}
        `;

        await mailServer({
            destinationUser: process.env.EMAIL,
            subjectText: 'Contato',
            textOption: body
        });

        response.status(200).send({
            answer: "Enviado. Agradecemos seu contato!"
        });
    } catch (error){
        response.status(500).send({
            answer: "Desculpe. Houve alguma falha no envio!"
        });
    }
}

module.exports = sendMail;