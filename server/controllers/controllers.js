const path = require('path');

exports.getIndex = (request, response) => {
    response.sendFile(path.join(__dirname, '../public/index.html'));
}



