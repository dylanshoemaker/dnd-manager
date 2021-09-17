const { Player } = require('../models');

const playerData = [
    {
        name: '',
        level: '',
        armor_class: '',
        health: '',
        strength: '',
        dexterity: '',
        constitution: '',
        wisdom: '',
        intelligence: '',
        charisma: '',
        pp: ''
    },
    {
        name: '',
        level: '',
        armor_class: '',
        health: '',
        strength: '',
        dexterity: '',
        constitution: '',
        wisdom: '',
        intelligence: '',
        charisma: '',
        pp: ''
    },
    {
        name: '',
        level: '',
        armor_class: '',
        health: '',
        strength: '',
        dexterity: '',
        constitution: '',
        wisdom: '',
        intelligence: '',
        charisma: '',
        pp: ''
    },
    {
        name: '',
        level: '',
        armor_class: '',
        health: '',
        strength: '',
        dexterity: '',
        constitution: '',
        wisdom: '',
        intelligence: '',
        charisma: '',
        pp: ''
    },
    {
        name: '',
        level: '',
        armor_class: '',
        health: '',
        strength: '',
        dexterity: '',
        constitution: '',
        wisdom: '',
        intelligence: '',
        charisma: '',
        pp: ''
    },
    {
        name: '',
        level: '',
        armor_class: '',
        health: '',
        strength: '',
        dexterity: '',
        constitution: '',
        wisdom: '',
        intelligence: '',
        charisma: '',
        pp: ''
    },
]

const seedPlayers = () => Player.bulkCreate(playerData, {individualHooks: true});

module.exports = seedPlayers;