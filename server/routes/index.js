const cors = require('cors');

const controller = require("../controllers/controllers");
const feedbackController = require('../controllers/FeedbackController');
const socialMediaController = require('../controllers/SocialMediaController');
const eventController = require('../controllers/EventController');
const partnershipsController = require('../controllers/PartnershipsController');
const firstTextController = require("../controllers/SecOneTextController");


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

  app.get('/api/partnerships', (request, response) => {
    partnershipsController.getPartnerships(request, response)
  })

  app.get('/api/first-text', (request, response) => {
    firstTextController.getFirstText(request, response)
  });
};