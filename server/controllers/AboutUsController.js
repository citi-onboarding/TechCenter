
const keystone = require('keystone');
const About = keystone.list('Abouts');

exports.getAbouts = (request, response) => {
    About.model.find((err, data) => {
        if (err) {
            response.status(500).send('DB Error');
        } else {
            response.send(data);
        }
    })
}