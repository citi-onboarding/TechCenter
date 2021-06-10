const keystone = require('keystone');
const Partnership = keystone.list('Partnership');

exports.getPartnerships =  (request, response) => {
    Partnership.model.find((error,data) => {
        if(error){
            response.status(500).send('DB Error')
        } else {
            response.send(data)
        }
    })
}