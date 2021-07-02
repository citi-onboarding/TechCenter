const keystone = require('keystone');
const Emails = keystone.list('Emails');

exports.getEmails =  (request, response) => {
    Emails.model.find((error,data) => {
        if(error){
            response.status(500).send('DB Error')
        } else {
            response.send(data)
        }
    })
}