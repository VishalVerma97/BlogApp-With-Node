const postRouter = require('express').Router();
const controller = require('./postController');
let createRoutes = require('../../utils/createRoutes');

createRoutes(controller, postRouter);

module.exports = postRouter;