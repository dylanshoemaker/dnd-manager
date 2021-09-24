const { Enemy } = require('../models');

const enemyData = [
    {
        enemy_name: 'Shenron',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0,
        party_id: 1
    },
    {
        enemy_name: 'Dragonite',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0,
        party_id: 2
    },
    {
        enemy_name: 'Smaug',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0,
        party_id: 3
    },
    {
        enemy_name: 'Toothless',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0,
        party_id: 1
    },
    {
        enemy_name: 'Haku',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0,
        party_id: 2
    },
    {
        enemy_name: 'King Ghidorah',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0,
        party_id: 3
    },
    {
        enemy_name: 'Mushu',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0,
        party_id: 2
    },
    {
        enemy_name: 'Ancalagon the Black',
        enemy_type: 'Dragon',
        armor_class: 0,
        health: 0,
        party_id: 1
    }
]

const seedEnemies = () => Enemy.bulkCreate(enemyData);

module.exports = seedEnemies;