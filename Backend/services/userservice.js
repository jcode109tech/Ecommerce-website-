const UserModel = require('../schemas/userschema');

class UserService {
    async createService (userInfo) {
        // Check if the email already exists
        const emailExists = await UserModel.compareEmails(userInfo.email);
        if (emailExists) {
            throw new Error('Email already exists');
        }

        const newUser = new UserModel(userInfo);
        const saved = await newUser.save();
        return saved;
    }

    async findAllUser () {
        const users = await UserModel.find();
        return users;
    }

    async findOneUser (id) {
        const oneUser = await UserModel.findOne({ _id: id });
        return oneUser;
    }

    async compareUsers (username) {
        const uniqueUser = await UserModel.findOne({ username: username });
        return uniqueUser;
    }

    async deleteOneUser (id) {
        const deleted = await UserModel.findOneAndDelete({ _id: id });
        return deleted;
    }

    async updateOneUser(id, details) {
        try {
            const user = await UserModel.findById(id);
            if (!user) {
                throw new Error('User not found');
            }
    
            if (details.firstname) user.firstname = details.firstname;
            if (details.lastname) user.lastname = details.lastname;
            if (details.username) user.username = details.username;
            if (details.email) user.email = details.email;
            if (details.password) user.password = details.password; // This will trigger the pre-save hook
            if (details.role) user.role = details.role;
            if (details.otp) user.otp = details.otp;
    
            const updatedUser = await user.save();
    
            return updatedUser;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async validateUserSignUp (email, otp) {
        const user = await UserModel.findOne({ email: email});
        if (!user) {
            return [false, 'user not found']
        }
        if (user && user.otp !== otp) {
            return [false && 'Invalid OTP']
        } else {
            return [user, 'Email verifed Successfully']
        }
    }
};

const userService = new UserService();

module.exports = userService;
