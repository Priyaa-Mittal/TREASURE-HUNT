const express = require('express');
const routes = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const jwtSecret = "HelloMynameisPriyaMittalHowareyo";

routes.post('/createUser', [
    body('email').isEmail(),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        let secpswd = await bcrypt.hash(req.body.pswd, salt);
        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                pswd: secpswd,
                score: 0,
            })
            res.json({ success: true })
        }

        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })


// ********************** lOGIN USER************************

routes.post('/loginUser', [
    body('email').isEmail(),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;

        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                console.log("jwtSecret");
                return res.status(400).json({ errors: "Try logging with correct credentials" });

            }

            const pwdCompare = await bcrypt.compare(req.body.pswd, userData.pswd)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Try logging with correct credentials" })
            }

            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);

            return res.json({ success: true, authToken: authToken });
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })


// ************ UPDATE SCORE**********************

routes.post('/updateUser', [body('email').isEmail()], async (req, res) => {
    // console.log(req)
    const errors = validationResult(req.body);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
        let userData = await User.findOneAndUpdate({ email }, { $set: { score: req.body.score } }, { new: true });
        console.log(userData)
        return res.json({ succes: true });
    }
    catch (error) {
        console.log(error);
        return res.json({ success: false, msg: "Error" });
    }
})



// ********************** Access the leaderboard *******************************

routes.get("/leaderboard", async function (req, res) {
    let data = (await User.find().sort({ score: -1 }).limit(5));
    try {
        return res.json({ success: true, data });
    }
    catch (error) {
        return res.json({ success: false });
    }

});



// *******************Dashboard page **********************
routes.get("/dashboard", async function (req, res) {
    let data = (await User.find());
    try {
        return res.json({ success: true, data });
    }
    catch (error) {
        return res.json({ success: false });
    }

});
module.exports = routes;