const User = require('../app/models/user')
const jwt = require("jsonwebtoken")

const userAuthentication = (req, res, next) => {
    const header = req.header('x-auth')
    if (header) {
        const token = header.split(' ')[1]

        try {
            const user = jwt.verify(token, process.env.SECRET_KEY)
            User.findById(user._id, '-password')
                .then((user) => {
                    req.user = user
                    next()
                })
                .catch((err) => {
                    res.json(err)
                })
        } catch (e) {
            res.json(e)
        }
    } else {
        res.json({ errors: { message: 'Token not present' } })
    }
}

module.exports = userAuthentication