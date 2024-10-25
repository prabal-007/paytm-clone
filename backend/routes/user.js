const express = require('express')
const router = express.Router()
const { User } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")

const signupBody = zod.object({
    username: zod.String().email(),
    firstName: zod.String(),
    lastName: zod.String(),
    password: zod.String()
})

router.post("/signup", async(req, res) = {
    const success = signupBody.safeParse(req.body)
    if(!success) {
        return res.status(411).json({
            message: "Email already exist / invalid inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser) {
        return res.status(411).json({
            message: "User already exist!"
        })
    }

    const password_hash = await argon2.hash(req.body.password);

    const user = new User.create({
        username: req.body.username,
        password: password_hash,
        firstName: req.body.firstName,
        lastName: req.body.lastname
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "user create successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.String().email(),
    password: zod.String()
})

router.post("/signin", async (req, res) => {
    const success = signinBody.safeParse(req.body)

    if (!success) {
        return res.status(411).json({
            message: "Invalid inputs!"
        })
    }

    const existingUser = User.findOne({
        username: req.body.username
    })

    if (!existingUser) {
        return res.status(411).json({
            message: "User not found / Error while logging in"
        })
    } else {
        const isValidPassword = await argon2.verify(existingUser.password_hash, req.body.password)

        if (!isValidPassword) {
            return res.status(411).json({
                message: "Invalid password / Error while logging in"
            })
        } else {
            const token = jwt.sign({
                userId: existingUser._id
            }, JWT_SECRET)

            return res.status(200).json({
                token: token
            })
        }
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})

const updateBody = zod.object({
    password: zod.String().optional(),
    firstName: zod.String().optional(),
    lastName: zod.String().optional()
})

router.put("/", async (req, res) => {
    const success = updateBody.safeParse(req.body)

    if (!success){
        return res.status(404).json({
            message: "Invalid inputs!"
        })
    }
    
    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "User updated successfully"
    })

})

router.get("/bulk", async(req, res) => {
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

    res,json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            userId: user._id
        }))
    })
})

module.exports = router;