const express = require("express");
const { Acccount } = require("../db");
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
    const { amount, to } = req.body;

    const account = await Acccount.findOne({
        userId: req.userId
    });

    if(account.balance < amount){
        return res.status(400).json({
            messgae: "Insufficient Balance"
        })
    }

    const toAccount = await Acccount.findOne({
        userId: to
    })

    if (!toAccount){
        return res.status(400).json({
            message: "Invalid Account"
        })
    }

    await Acccount.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        messgae: "transection successful"
    })
})

module.exports = {
    router
}