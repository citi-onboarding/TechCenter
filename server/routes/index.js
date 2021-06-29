const cors = require('cors');

const controller = require("../controllers/controllers");
const feedbackController = require('../controllers/FeedbackController');
const socialMediaController = require('../controllers/SocialMediaController');
const eventController = require('../controllers/EventController');
const partnershipsController = require('../controllers/PartnershipsController');
const firstTextController = require("../controllers/SecOneTextController");
const aboutUs = require('../controllers/AboutUsController');
const contactImage = require('../controllers/ContactImageController');
const contact = require('../controllers/ContactController');
const mail = require('../controllers/MailController');
const articleText = require("../controllers/ArticleText")
const upperText = require("../controllers/UpperText")


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

  app.get('/api/aboutus', (request, response) => {
    aboutUs.getAbouts(request, response)
  });

  app.get('/api/contact-image', (request, response) => {
    contactImage.getImagesContact(request, response)
  })

  app.get('/api/contact-text', (request, response) => {
    contact.getTextContact(request, response)
  })

  app.post('/api/contact', (request, response) => {
    mail(request, response)
  })

  app.get("/api/article-text", (request, response) => {
    articleText.getArticleText(request, response)
  })

  app.get("/api/upper-text", (request, response) => {
    upperText.getUpperText(request, response)
  })
};