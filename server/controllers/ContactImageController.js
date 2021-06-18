
const keystone = require('keystone');
const ContactImage = keystone.list('Contact Image');

exports.getImagesContact = (request, response) => {
    ContactImage.model.find((err, data) => {
        if (err) {
            response.status(500).send('DB Error');
        } else {
            response.send(data);
        }
    })
}