const User = require('../models/auth.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {

    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if (err) {
            res.json({

                error: err
            })
        }

        let user = new User({

            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })

        user.save()
            .then(user => {
                res.json({
                    message: 'User succesfully added'
                })
            })
            .catch(error => {
                res.json({
                    message: 'AN error occured'
                })
            })
    })

}
const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    User.findOne({ $or: [{ email: username }, { name: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'VerySecretValue', { expiresIn: '1h' })
                        res.json({
                            message: 'Login Successful',
                            token
                        })
                        console.log('Login Sucess');

                    } else {
                        res.json({
                            message: 'Password does not match'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'User not found'
                })
            }
        })
}

module.exports = {
        register,
        login
    }
    /*const User = require('../models/auth.model')
    const expressJwt = require('express-jwt')
    const lodash = require('lodash')
    const{OAuth2Client} = require('google-auth-library')
    const fetch = require('node-fetch')
    const {validationResult} = require('express-validator')
    const jwt = require('jsonwebtoken')
    const {errorHandler} = require('../helpers/dbErrorHandling')//custom error handler
    const crypto = require("crypto")//encryption
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.MAIL_KEY)


    //custom validation to req.body created to save time
    exports.registerController = (req,res)=>{
        const{name,email,password} = req.body
        
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            const firstError = errors.array().map(error => error.msg)[0]
            return res.status(422).json({
                error: firstError
            })
        }
        else {
            User.findOne({
                email
            }).exec((err,user)=>{
                //if user is valid
                if(user){
                    return res.status(400).json({
                        error: "Email is taken"
                    })
                }
            })
            //token generation
            // const token = jwt.sign(
            //     {
            //         name,
            //         email,
            //         password
            //     },
            //     process.env.JWT_ACCOUNT_ACTIVATION,
            //     {
            //         expiresIn:'15m'
            //     }
            //)


            // const emailData = {
            //     from: process.env.EMAIL_FROM,
            //     to:to,
            //     subject: 'Acoount Activation Link',
            //     html: `
            //     <h1>Please click to activate account</h1>
            //     <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
            //     <hr/>
            //     <p>Sensitive Info</p>
            //     <p>${process.env.CLIENT_URL}</p>    
            // }
        }
        

    }*/