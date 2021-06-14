const keystone = require('keystone');
const FirstText = keystone.list('Texto Inicial');

exports.getFirstText = (request, response) => {
    FirstText.model.find((error, data) => {
        if(error){
            response.status(500).send('DB Error')
        } else {
            response.send(data)
        }
    } )
}