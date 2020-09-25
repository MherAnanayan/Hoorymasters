const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

router.post(
    '/register', 
[
    check('email', 'wrong email').isEmail(),
    check('password', 'min length passord is 6 symbol')
    .isLength({min: 6})
], 
async (req, res) => {

    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({
                    errors: errors.array(),
                    message: 'wrong date'
                })
        }

        const {email, password} = req.body
        const candidate = await User.findOne({email})

        if (candidate) {
            return res
                .status(400)
                .json({message: 'user alredy declareyted'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})
        await user.save()
        res
            .status(201)
            .json({message: 'User is Add'})
    } catch (e) {
        res
            .status(500)
            .json({message: "wrong!!!"})
    }
})

router.post('/login', 
[
    check('email', 'please input correct email')
        .normalizeEmail()
        .isEmail(),
    check('password', 'input password').exists()

],
async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({
                    errors: errors.array(),
                    message: 'wrong date for enter '
                })
        }

        const {email, password} = req.body
        const user = await User.findOne({email})

        if (!user) {
            return res
                .status(400)
                .json({message: 'couldnt find USER'})
        }

        const isMatachPass = await bcrypt.compare(password, user.password)
        if (!isMatachPass) {
            return res
                .status(400)
                .json({message: 'wrong password'})
        }
        const token = jwt.sign(
            {userId: user.id}, 
            config.get('jwtSecret'), 
            {expiresIn: '1h'}
            )

        res.json({token, userId:user.id})

    } catch (e) {
        res
            .status(500)
            .json({message: "wrong try again!!!"})
    }
})

module.exports = router