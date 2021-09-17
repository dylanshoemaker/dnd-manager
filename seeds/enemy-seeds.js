const { Enemy } = require('../models');

const enemyData = [
    {
        enemy_name: '',
        // whatever monster data
    },
    {
        enemy_name: '',
        // whatever monster data
    },
    {
        enemy_name: '',
        // whatever monster data
    },
    {
        enemy_name: '',
        // whatever monster data
    },
    {
        enemy_name: '',
        // whatever monster data
    },
]

const seedMonsters = () => Monster.bulkCreate(monsterData, {individualHooks: true});

module.exports = seedMonsters;