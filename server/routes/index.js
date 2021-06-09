const cors = require('cors');

const controller = require("../controllers/controllers");
const feedbackController = require('../controllers/FeedbackController');
const socialMediaController = require('../controllers/SocialMediaController');
const eventController = require('../controllers/EventController');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (request, response) => {
    controller.getIndex(request, response)
  });

  app.get('/api/events', (request, response) => {
    eventController.getEvents(request, response)
  });

  app.get('/api/feedbacks', (request, response) => {
    feedbackController.getFeedbacks(request, response)
  });

  app.get('/api/socialmedias', (request, response) => {
    socialMediaController.getSocialMedia(request, response)
  });
};
