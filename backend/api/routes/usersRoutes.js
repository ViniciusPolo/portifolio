const express = require('express')
const router = express.Router()

const usersController = require ('../controllers/usersController');

router.get('/users', usersController.indexAll);

router.post('/users', usersController.store);

router.post('/login', usersController.login)
router.post('/logout', usersController.logout)

module.exports = router