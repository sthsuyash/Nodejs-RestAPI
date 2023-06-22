const User = require('../models/user');
const logger = require('../logger');

// create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const user = await User.create({ name, email, phone });
        res.status(201).json(user);
    } catch (error) {
        logger.error('Error creating user:', error);
        res.status(500).json({
            error: 'Failed to create user'
        });
    }
};

// get all users
// GET /api/users?page=1&limit=10&name=John&email=john&sort=name:asc
exports.getUsers = async (req, res) => {
    try {
        const { page = 1, limit = 10, name, email, sort } = req.query;

        const options = {
            offset: (page - 1) * limit,
            limit: parseInt(limit),
            where: {},
            order: [],
        };

        if (name) {
            options.where.name = { [Sequelize.Op.like]: `%${name}%` };
        }

        if (email) {
            options.where.email = { [Sequelize.Op.like]: `%${email}%` };
        }

        if (sort) {
            const [field, order] = sort.split(':');
            options.order.push([field, order]);
        }

        const users = await User.findAndCountAll(options);
        
        res.status(200).json(users);
    } catch (error) {
        logger.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
};

// get user by id
exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({
                error: 'User not found'
            });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        logger.error('Error creating user:', error);
        res.status(500).json({
            error: 'Failed to retrieve user'
        });
    }
};

// update user by id
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({
                error: 'User not found'
            });
        } else {
            user.name = name;
            user.email = email;
            user.phone = phone;
            await user.save();
            res.json(user);
        }
    } catch (error) {
        logger.error('Error creating user:', error);
        res.status(500).json({
            error: 'Failed to update user'
        });
    }
};

// delete user by id
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            await user.destroy();
            res.json({
                message: 'User deleted successfully'
            });
        }
    } catch (error) {
        logger.error('Error creating user:', error);
        res.status(500).json({
            error: 'Failed to delete user'
        });
    }
};
