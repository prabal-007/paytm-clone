const express = require("express");
const mongoose = require("mongoose");
const { Account } = require("../db");
const { authMiddleware} = require("../middleware");
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userID: req.userID
    });

    res.status(200).json({
        balance: account.balance
    })
})


router.post("/transfer", authMiddleware, async (req, res) => {
    const { amount, to } = req.body;

    const account = await Account.findOne({
        userID: req.userID
    });

    if (account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userID: to
    });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userID: req.userID
    }, {
        $inc: {
            balance: -amount
        }
    })

    await Account.updateOne({
        userID: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        message: "Transfer successful"
    })
});


// Good solution but with "https://stackoverflow.com/questions/51461952/mongodb-v4-0-transaction-mongoerror-transaction-numbers-are-only-allowed-on-a" err

// router.post("/transfer", authMiddleware, async (req, res) => {
//     const session = await mongoose.startSession();

//     await session.startTransaction();
//     const { to, amount } = req.body;

//     const account = await Account.findOne({userID: req.userID}).session(session);

//     if (!account || account.balance < amount) {
//         await session.abortTransection();
//         return res.status(400).json({
//             message: "Insufficient balance"
//         })
//     };

//     const toAccount = await account.findOne({userID: to}).session(session);

//     if (!toAccount) {
//         await session.abortTransection();
//         return res.status(400).json({
//             message: "Invaid Account"
//         })
//     };

//     await Account.updateOne({userID: req.userID}, {$inc: {balance: -amount}}).session(session);
//     await Account.updateOne({userID: to}, {$inc: {balance: amount}}).session(session);

//     await session.commitTransaction();
//     res.status(200).json({
//         message: "Transfer successful"
//     })
// })

module.exports = router;
