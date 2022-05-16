var express = require('express');
var router = express.Router();
var Controller = require('../controller/user/home.controller');
/* GET users listing. */
router.get('/', Controller.index);
router.get('/create', Controller.create);
router.post('/store', Controller.store);

router.get('/edit/:id', Controller.edit);
router.post('/update/:id', Controller.update);

router.get('/delete/:id', Controller.delete);
module.exports = router;
