const mongoose = require('mongoose')

const { Schema } = mongoose

const humiditySchema = new Schema({
    sensorName: {
        type: String,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Humidity = mongoose.model('Humidity', humiditySchema)

module.exports = Humidity
