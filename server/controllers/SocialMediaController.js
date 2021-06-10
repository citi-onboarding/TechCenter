const keystone = require('keystone');
const SocialMedia = keystone.list('Social Media');

exports.getSocialMedia =  (request, response) => {
    SocialMedia.model.find((error,data) => {
        if(error){
            response.status(500).send('DB Error')
        } else {
            response.send(data)
        }
    })
}