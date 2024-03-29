// const postRouter = require('express').Router();
// const controller = require('./postController');
// // let createRoutes = require('../../utils/createRoutes');

// // createRoutes(controller, postRouter);

// // module.exports = postRouter;

var router = require('express').Router();
var controller = require('./postController');
var auth = require('../../auth/auth');

var checkUser = [auth.decodeToken(), auth.getFreshUser()];
// setup boilerplate route jsut to satisfy a request
// for building
router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(checkUser ,controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete)

module.exports = router;
