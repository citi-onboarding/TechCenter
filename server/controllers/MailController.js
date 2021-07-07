const dotenv = require('dotenv');
const mailServer = require('../services/mailServer');
const URL = require('../config/config.js');
const { API } = require("../services/API.js");
const template = require('../template/index.js');


async function getEmails(){
    try {
        let emails = [];
        await API.get('/emails').then((response) => {
            response.data.forEach((email) => {
                const { Email } = email;
                emails.push(Email);
            })
        })
        return emails;
    } catch {
        return [];
    }
}


const sendMail = async (request, response, next) => {
    try {
        const { name, email, phone, message} = request.body;

        // const body = `
        // Nome : ${name}
        // Email: ${email}
        // Telefone: ${phone}
        // Mensagem: ${message}
        // `;

        const body = template(name, email, phone, message);

        const techCenterEmails = await getEmails();
        const usersToSendEmail = techCenterEmails.join(',');

        await mailServer({
            destinationUser: usersToSendEmail,
            subjectText: 'Uma pessoa apaixonada por tecnologia entrou em contato.',
            htmlOption: body
        })

        response.status(200).send({
            answer: "Enviado. Agradecemos seu contato!"
        });

        
    } catch (error){
        console.log(error);
        response.status(500).send({
            answer: "Desculpe. Houve alguma falha no envio!"
        });
    }
}

module.exports = sendMail;