const { Enemy } = require('../models');

const enemyData = [
    {
        enemy_name: '',
        enemy_type: '',
        armor_class: 0,
        health: 0
    }
]

const seedEnemies = () => Enemy.bulkCreate(enemyData, {individualHooks: true});

module.exports = seedEnemies;