const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const UserSchema = new mongoose.Schema(
    {
        firstname: { type: String, required: true, minlength: 3 },
        lastname: { type: String, required: true, minlength: 3 },
        username: { type: String, required: true, unique: true, minlength: 5, maxlength: 30, match: /^[a-zA-Z0-9]+$/ },
        email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Please enter a valid email address'] },
        password: { type: String, required: true, minlength: 6, match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/ },
        role: { type: String, enum: ['Admin', 'User'], default: 'User' },
        otp: { type: String }
    },
    { timestamps: true }
);

UserSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const hash = await bcrypt.hash(this.password, saltRounds);
            this.password = hash;
            next();
        } catch (err) {
            return next(err);
        }
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = async function (passwordEntered){
    try {
        return bcrypt.compare(passwordEntered, this.password);
    } catch (err) {
        throw err;
    }
};

UserSchema.statics.compareEmails = async (email) => {
    const user = await User.findOne({ email: email });
    if (user !== null) {
        return true;
    } else return false;
};


const User = mongoose.model('User', UserSchema);

module.exports = User;