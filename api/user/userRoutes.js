// const userRouter = require('express').Router();
// const controller = require('./userController');
// // let createRoutes = require('../../utils/createRoutes');

// // createRoutes(controller, userRouter);


// // module.exports = userRouter;


var router = require('express').Router();
var controller = require('./userController');
var auth = require('../../auth/auth');
var checkUser = [auth.decodeToken(), auth.getFreshUser()];

// setup boilerplate route jsut to satisfy a request
// for building
router.param('id', controller.params);
router.get('/me', checkUser, controller.me);

router.route('/')
  .get(controller.get)
  .post(controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete)

module.exports = router;
