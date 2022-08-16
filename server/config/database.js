const mongoose = require('mongoose')

const configDB = () => {
    mongoose.connect('mongodb://localhost:27017/interview')
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configDB