const { User } = require('../models');

const userData = [
    {
        username: 'swimteampie',
        email: 'email@email.com',
        password: 'password123'
    },
    {
        username: '$avatage',
        email: 'email@email.com',
        password: 'password123'
    },
    {
        username: 'wingnut33',
        email: 'email@email.com',
        password: 'password123'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;