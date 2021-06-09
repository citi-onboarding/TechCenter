const cors = require('cors');

const controller = require("../controllers/controllers");

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) =>
    controller.getIndex(req, res)
  );

  app.get('/api/posts', (req, res) =>
    controller.getPosts(req, res)
  );

  app.get('/api/events', (req, res) =>
    controller.getEvents(req, res)
  );

  app.get('/api/feedbacks', (request, response) => {
    controller.getFeedbacks(request, response)
  });
};
