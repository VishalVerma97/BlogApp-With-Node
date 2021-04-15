const userRouter = require('express').Router();
const logger = require('../../utils/logger');

userRouter.route('/')
  .get(function(req, res) {
    logger.log('Hey from users');
    res.send({ok: true});
  });


module.exports = userRouter;