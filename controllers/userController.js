const User = require('../models/User');

module.exports.getAllUsers = async (req, res) => {
    try {
        const user = await User.find({ isAdmin: false }, ['name', '_id', 'email']);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500);
        return error
    }
}

module.exports.getUsersDetail = async (req, res) => {
    try {
        const { user_id } = req.params;

        const user = await User.find({ _id: user_id }, ['name', '_id', 'email']);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500);
        return error
    }
}