const express = require('express')
const router = express.Router()
const { User, Account } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const { authMiddleware } = require("../middleware")
const zod = require("zod");
const argon2 = require("argon2");

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.post("/signup", async (req, res) => {
    const success = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already exist / invalid inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "User already exist!"
        })
    }

    // const password_hash = await argon2.hash(req.body.password);

    const user = await User.create({
        username: req.body.username,
        // password: password_hash,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userID = user._id;

    await Account.create({
        userID,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userID
    }, JWT_SECRET);

    res.json({
        message: "user create successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post("/signin", async (req, res) => {
    const success = signinBody.safeParse(req.body)

    if (!success) {
        return res.status(411).json({
            message: "Invalid inputs!"
        })
    }

    const existingUser = User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (!existingUser) {
        return res.status(411).json({
            message: "User not found / Error while logging in"
        })
    } else {
        // const isValidPassword = await argon2.verify(existingUser.password_hash, req.body.password)

        // if (!isValidPassword) {
        //     return res.status(411).json({
        //         message: "Invalid password / Error while logging in"
        //     })
        // } else {
        const token = jwt.sign({
            userID: existingUser._id
        }, JWT_SECRET)

        return res.status(200).json({
            token: token
        })
    // }
}

    res.status(411).json({
    message: "Error while logging in"
})
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

router.put("/", authMiddleware, async (req, res) => {
    const success = updateBody.safeParse(req.body)

    if (!success) {
        return res.status(404).json({
            message: "Error while updating information!"
        })
    }

    await User.updateOne(req.body, {
        id: req.userID
    })

    res.status(200).json({
        message: "User updated successfully"
    })

})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                $regex: filter
            }
        }, {
            lastName: {
                $regex: filter
            }
        }]
    })

    if (!users) {
        return res.status(404).json({
            message: "No users found"
        })
    }

    res.status(200).json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            userID: user._id
        }))
    })
})

module.exports = router;