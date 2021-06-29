const keystone = require('keystone');
const UpperText = keystone.list('UpperText');

exports.getUpperText = (request, response) => {
    UpperText.model.find((err, data) => {
        if (err) {
            response.status(500).send('DB Error');
        } else {
            response.send(data);
        }
    })
}