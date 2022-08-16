const express = require('express')
const router = express.Router()

const userAuthentication = require('../middlewares/userAuthentication')
const userControllers = require('../app/controllers/userControllers')
const temperatureControllers = require('../app/controllers/temperatureControllers')
const humidityControllers = require('../app/controllers/humidityControllers')

router.get('/users', userControllers.list)
router.post('/signup', userControllers.signup)
router.post('/login', userControllers.login)
router.get('/account', userAuthentication, userControllers.account)
router.get('/api/temperatures', userAuthentication, temperatureControllers.list)
router.post('/api/temperatures', userAuthentication, temperatureControllers.post)
router.get('/api/humidities', userAuthentication, humidityControllers.list)
router.post('/api/humidities', userAuthentication, humidityControllers.post)

module.exports = router