const keystone = require('keystone');
const Feedback = keystone.list('Feedbacks');

exports.getFeedbacks = (request, response) => {
    Feedback.model.find((error, data) => {
        if(error){
            response.status(500).send('DB Error')
        } else {
            response.send(data)
        }
    } )
}
