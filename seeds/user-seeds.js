const { User } = require('../models');

const userData = [
    {
        email: 'email1@email.com',
        password: 'password123'
    },
    {
        email: 'email2@email.com',
        password: 'password123'
    },
    {
        email: 'email3@email.com',
        password: 'password123'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;