const mongoose = require('mongoose');
const schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/paytm")

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        lowercase: true,
        unique: true,
        maxLength: 30,
        trim: true
    },
    passowrd: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        trim: true,
        maxLength: 30,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        maxLength: 30,
        required: true
    }
});

const accountSchema = new schema({
    userID: {
        // type: schema.Type.ObjectId,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
const Acccount = mongoose.model('Account', accountSchema);

module.exports ={
    User,
    Acccount
};
