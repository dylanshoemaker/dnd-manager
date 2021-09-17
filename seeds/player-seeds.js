const { Player } = require('../models');

const playerData = [
    {
        name: '',
        level: '',
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