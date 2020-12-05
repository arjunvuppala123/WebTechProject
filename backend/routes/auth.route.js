const express = require('express')
const router = express.Router()

/*const {
    registerController 
} = require('../controllers/auth.controller.js')*/

const AuthController = require('../controllers/auth.controller')
const DataController = require('../controllers/data')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/billboard', DataController.hiphop)

module.exports = router