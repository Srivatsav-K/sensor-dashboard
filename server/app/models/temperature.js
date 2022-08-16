const mongoose = require('mongoose')

const { Schema } = mongoose

const temperatureSchema = new Schema({
    sensorName: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Temperature = mongoose.model('Temperature', temperatureSchema)

module.exports = Temperature