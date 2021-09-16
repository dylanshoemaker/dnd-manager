const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'swimteampie',
        email: 'email@email.com',
        password: 'password'
    },
    {
        username: '$avatage',
        email: 'email@email.com',
        password: 'contrasena'
    },
    {
        username: 'wingnut33',
        email: 'email@email.com',
        password: 'heslo'
    },
    {
        username: 'goldbrick85',
        email: 'email@email.com',
        password: 'le-mot-de-passe'
    },
    {
        username: 'potatocake93',
        email: 'email@email.com',
        password: "muw'lj"
    },
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;