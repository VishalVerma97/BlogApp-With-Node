const postRouter = require('express').Router();
const logger = require('../../utils/logger');


postRouter.route('/')
  .get(function(req, res) {
    logger.log('Hey from posts');
    res.send({ok: true});
  });


module.exports = postRouter;