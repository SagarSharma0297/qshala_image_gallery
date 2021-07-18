
const express = require('express');
const IMAGE = require('../controller/image-controller.js');
//const addImage = require('../controller/image-controller.js');
//const getImage = require('../controller/image-controller.js');
//const IMAGEE = require('../controller/image-controller.js');
const IMAGEE = new IMAGE();

const route = express.Router();

route.get('/getdata',IMAGEE.getImage);

route.post('/add',IMAGEE.addImage);

route.get('/getimage/:id',IMAGEE.getImageByID);

module.exports = route;