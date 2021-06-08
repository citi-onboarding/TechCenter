const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const controller = require("../controllers/controllers")

const Post = keystone.list('Posts');
const Event = keystone.list('Events');

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

};
