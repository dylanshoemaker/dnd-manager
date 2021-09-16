const sequelize = require('../config/connection');
const { Monster } = require('../models');

const monsterData = [
    {
        name: '',
        // whatever monster data
    },
    {
        name: '',
        // whatever monster data
    },
    {
        name: '',
        // whatever monster data
    },
    {
        name: '',
        // whatever monster data
    },
    {
        name: '',
        // whatever monster data
    },
]

const seedMonsters = () => Monster.bulkCreate(monsterData, {individualHooks: true});

module.exports = seedMonsters;