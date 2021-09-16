const { Enemy } = require('../models');

const enemyData = [
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