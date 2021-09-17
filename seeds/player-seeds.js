const { Player } = require('../models');

const playerData = [
    {
        name: '',
        race: '',
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
        race: '',
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
        race: '',
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
        race: '',
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
        race: '',
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
        race: '',
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
        race: '',
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
        race: '',
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
        race: '',
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
        race: '',
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