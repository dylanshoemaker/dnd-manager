const { Player } = require('../models');

const playerData = [
    {
        player_name: '',
        player_race: '',
        player_class: '',
        level: 0,
        armor_class: 0,
        health: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 0,
        pp: 0
    },
    {
        player_name: '',
        player_race: '',
        player_class: '',
        level: 0,
        armor_class: 0,
        health: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 0,
        pp: 0
    },
    {
        player_name: '',
        player_race: '',
        player_class: '',
        level: 0,
        armor_class: 0,
        health: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 0,
        pp: 0
    },
    {
        player_name: '',
        player_race: '',
        player_class: '',
        level: 0,
        armor_class: 0,
        health: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 0,
        pp: 0
    },
    {
        player_name: '',
        player_race: '',
        player_class: '',
        level: 0,
        armor_class: 0,
        health: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 0,
        pp: 0
    }
    
   
]

const seedPlayers = () => Player.bulkCreate(playerData, {individualHooks: true});

module.exports = seedPlayers;