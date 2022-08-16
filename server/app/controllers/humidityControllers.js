const Humidity = require('../models/humidity')

const humidityControllers = {}

//get
humidityControllers.list = (req, res) => {
    const userId = req.user._id

    Humidity.find({ user: userId })
        .then((humidities) => {
            if (!humidities) {
                res.json({ errors: { message: 'Not found!' } })
            } else {
                res.json(humidities)
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

//post
humidityControllers.post = (req, res) => {
    const userId = req.user._id
    const body = req.body

    const humidity = new Humidity({ ...body, user: userId })
    humidity.save()
        .then((humidity) => {
            res.json(humidity)
        })
        .catch((err) => {
            res.json(err)
        })

}

//put
//delete

module.exports = humidityControllers
