const Temperature = require('../models/temperature')

const temperatureControllers = {}

//get
temperatureControllers.list = (req, res) => {
    const userId = req.user._id

    Temperature.find({ user: userId })
        .then((temperatures) => {
            if (!temperatures) {
                res.json({ errors: { message: 'Not found!' } })
            } else {
                res.json(temperatures)
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

//post
temperatureControllers.post = (req, res) => {
    const userId = req.user._id
    const body = req.body

    const temperature = new Temperature({ ...body, user: userId })
    temperature.save()
        .then((temperature) => {
            res.json(temperature)
        })
        .catch((err) => {
            res.json(err)
        })

}

//put
//delete

module.exports = temperatureControllers
