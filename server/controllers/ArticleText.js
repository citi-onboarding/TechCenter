
const keystone = require('keystone');
const ArticleText = keystone.list('ArticleText');

exports.getArticleText = (request, response) => {
    ArticleText.model.find((err, data) => {
        if (err) {
            response.status(500).send('DB Error');
        } else {
            response.send(data);
        }
    })
}