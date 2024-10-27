const { JWT_SECRET } = require("./config")
const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(404).json({
            message: "invalid token"
        })
    }
    
    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userID = decoded.userID;
        next();
    } catch (err) {
        return res.status(404).json({
            message: err
        })
    }
}

module.exports = {
    authMiddleware
}