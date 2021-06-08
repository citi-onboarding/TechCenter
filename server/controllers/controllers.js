const path = require('path');
const keystone = require('keystone');

const Event = keystone.list('Events');
const Post = keystone.list('Posts');

exports.getIndex = function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}

exports.getEvents = function (req, res) {
    Event.model.find((err, data) => {
        if (err) {
            res.status(500).send('DB Error');
        } else {
            res.send(data);
        }
    })
}

exports.getPosts = function (req, res) {
    Post.model.find((err, data) => {
        if (err) {
            res.status(500).send('DB Error');
        } else {
            res.send(data);
        }
    });
}

