
const keystone = require('keystone');
const Event = keystone.list('Events');

exports.getEvents = (request, response) => {
    Event.model.find((err, data) => {
        if (err) {
            response.status(500).send('DB Error');
        } else {
            response.send(data);
        }
    })
}