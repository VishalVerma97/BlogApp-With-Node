const router = require('express').Router();
const controller = require('./categoryController');
let createRoutes = require('../../utils/createRoutes');

createRoutes(controller, router);

module.exports = router;