const mongoose = require('mongoose')
const { isEmail, isStrongPassword } = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uniqueValidator = require('mongoose-unique-validator')


const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username required!'],
        minLength: [3, 'Username must have at least 3 characters!'],
        maxLength: [64, "Username can't exceed 64 characters !"],
        lowercase: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'email required!'],
        validator: {
            validate: (value) => {
                return isEmail(value)
            },
            message: () => {
                return 'Invalid email'
            }
        },
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password required'],
        validate: {
            validator: function (value) {
                return (
                    isStrongPassword(value, {
                        minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false
                    })
                )
            },
            message: function () {
                return 'Password must contain at least 1 uppercase character,lowercase character,number & a special character'
            }
        },
    },
}, { timestamps: true })

userSchema.plugin(uniqueValidator, { message: "{PATH} exists" })


userSchema.pre('save', function (next) {
    const user = this

    bcryptjs.genSalt()
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encrypted) => {
                    user.password = encrypted
                    next()
                })
        })
})

userSchema.methods.genToken = function (password) {
    const user = this

    return (

        bcryptjs.compare(password, user.password)
            .then((match) => {
                if (!match) {
                    return Promise.reject({ errors: { message: 'Invalid email or password' } })
                } else {
                    const tokenData = {
                        _id: user._id,
                        name: user.name,
                        email: user.email
                    }

                    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })

                    return Promise.resolve(`Bearer ${token}`)
                }
            })
    )
}

const User = mongoose.model('User', userSchema)

module.exports = User