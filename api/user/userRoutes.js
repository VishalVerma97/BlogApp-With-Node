const userRouter = require('express').Router();
const controller = require('./userController');
let createRoutes = require('../../utils/createRoutes');

createRoutes(controller, userRouter);


module.exports = userRouter;