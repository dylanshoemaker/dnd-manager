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

const seedEnemies = () => Enemy.bulkCreate(enemyData, {individualHooks: true});

module.exports = seedEnemies;