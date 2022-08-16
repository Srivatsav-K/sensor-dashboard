const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {}

userControllers.list = (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            res.json(err)
        })
}

userControllers.signup = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

userControllers.login = (req, res) => {
    const body = req.body
    const { email, password } = body

    User.findOne({ email })
        .then((user) => {
            if (!user) {
                res.json({ errors: { message: 'Invalid email or password' } })
            } else {
                return user.genToken(password)
            }
        })
        .then((token) => {
            res.json(token)
        })
        .catch((err) => {
            res.json(err)
        })
}

userControllers.account = (req, res) => {
    res.json(req.user)
}

module.exports = userControllers