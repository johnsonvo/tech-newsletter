const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
