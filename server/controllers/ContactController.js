
const keystone = require('keystone');
const Contact = keystone.list('Contact');

exports.getImagesContact = (request, response) => {
    Contact.model.find((err, data) => {
        if (err) {
            response.status(500).send('DB Error');
        } else {
            response.send(data);
        }
    })
}