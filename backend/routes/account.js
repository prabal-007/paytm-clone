const express = require("express");
const mongoose = require("mongoose");
const { Acccount } = require("../db");
const { authMiddleware} = require("../middleware");
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Acccount.findOne({
        userId: req.userId
    });

    res.status(200).json({
        balance: account.balance
    })
})

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = mongoose.startSession();

    (await session).startTransaction();
    const { to, amount } = req.body;

    const account = await Acccount.findOne({userId: req.userId}).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransection();
        return res.status(400).json({
            message: "Insufficient balance"
        })
    };

    const toAccount = await account.findOne({userId: to}).session(session);

    if (!toAccount) {
        await session.abortTransection();
        return res.status(400).json({
            message: "Invaid Account"
        })
    };

    await Account.updateOne({userId: req.userId}, {$inc: {balance: -amount}}).session(session);
    await Account.updateOne({userId: to}, {$inc: {balance: amount}}).session(session);

    await session.commitTransaction();
    res.status(200).json({
        message: "Transfer successful"
    })
})

module.exports = router;
