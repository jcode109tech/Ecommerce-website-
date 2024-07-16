const userInstance = require('../services/userservice');
const otpGenerator = require('../utilities/generateOTP');
const sendVerificationEmail = require('./otp.controller');
const bcrypt = require('bcryptjs')
const saltRounds = 10;

// Controller to get all users
const getAllUsers = async (req, res) => {
    const query = req.query.search
    try {
        const allUsers = query ? await userInstance.findAllUser() : await userInstance.findAllUser();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to get a single user by ID
const getOneUser = async (req, res) => {
    const { id } = req.params;
    try {
        const oneUser = await userInstance.findOneUser(id);
        res.status(200).json(oneUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to delete a user by ID
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await userInstance.deleteOneUser(id);
        res.status(200).json(deleted);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to update a user by ID
const userUpdate = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, username, email, password, role } = req.body;
    let otp;
    
    if (email) {
        otp = await otpGenerator();
        await sendVerificationEmail(email, otp);
    }
    try {
        const details = {
            firstname,
            lastname,
            username,
            email,
            password,
            role,
            otp
        };

        Object.keys(details).forEach(key => {
            if (details[key] === undefined) {
                delete details[key];
            }
        });

        const updated = await userInstance.updateOneUser(id, details);
        res.status(201).json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    deleteUser,
    userUpdate
}