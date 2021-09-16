const { Player } = require('../models');

const playerData = [
    {
        name: '',
        // character sheet data
    },
    {
        name: '',
        // character sheet data
    },
    {
        name: '',
        // character sheet data
    },
    {
        name: '',
        // character sheet data
    },
]

const seedPlayers = () => Player.bulkCreate(playerData, {individualHooks: true});

module.exports = seedPlayers;