const express = require('express');
const userRouter = express.Router();

userRouter.patch('/login', (req, res, next) => {
    try {
        console.log("login is succeed >>>");
        res.json({
            message: "user login",
            sessionId: "sessionId",
            name: "Chris",
            userId: "llove"
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message })
    }
});

module.exports = userRouter;