const express = require('express')
const router = express.Router()

const languagesController = require ('../controllers/languagesController');

router.get('/languages', languagesController.indexAll);

router.post('/languages', languagesController.store);

router.get('/languages/:language', languagesController.indexOne);

router.put('/languages/:language', languagesController.update);

module.exports = router