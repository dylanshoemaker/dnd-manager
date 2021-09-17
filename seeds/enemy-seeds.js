const { Enemy } = require('../models');

const enemyData = [
    {
        enemy_name: 'Shenron',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0
    },
    {
        enemy_name: 'Dragonite',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0
    },
    {
        enemy_name: 'Smaug',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0
    },
    {
        enemy_name: 'Toothless',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0
    },
    {
        enemy_name: 'Haku',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0
    }
]

const seedEnemies = () => Enemy.bulkCreate(enemyData, {individualHooks: true});

module.exports = seedEnemies;