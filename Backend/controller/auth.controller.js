const userInstance = require('../services/userservice');
const jwt = require('jsonwebtoken');
const otpGenerator = require('../utilities/generateOTP');
const sendVerificationEmail = require('./otp.controller');
const configVariables = require('../config/config');

const register = async (req, res) => {
    const { firstname, lastname, username, email, password, role} = req.body;
    let otp = await otpGenerator();
    if (!firstname || !lastname || !username || !email || !password, !otp) {
        return res.status(400).json({ message: 'please all details are required'})
    }
    await sendVerificationEmail(email, otp);
    try {
        const details = {
            firstname,
            lastname,
            username,
            email,
            password,
            role,
            otp
        }
        const newUser = await userInstance.createService(details);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const verifyEmail = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const [isValid, message] = await userInstance.validateUserSignUp(email, otp);
        if (isValid) {
            res.status(200).json({ message: 'Email verified successfully.' });
        } else {
            res.status(400).json({ message });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const loginUser = async (req, res) => {
    //console.log('body:', req.body);
    const { username, password } = req.body;
    try {
        const user = await userInstance.compareUsers(username);
        //console.log(user);
        if (!user) {
            return res.status(401).json({ message: "invalid username or password"});
        }
        const validPassword = await user.comparePassword(password);
        if (!validPassword) {
            return res.status(401).json({ message: "invalid username or password"});
        }
       // const { password: _, ...userWithoutPassword } = user._doc
        const { password: _, ...others } = user._doc;
        const accessToken = jwt.sign({
            userId: user._id, role: user.role
        }, configVariables.JWT_SECRET, {expiresIn: '3d'} )
        res.status(200).json({...others, token: accessToken})
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}



module.exports = { register, verifyEmail, loginUser }