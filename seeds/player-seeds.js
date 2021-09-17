const { Player } = require('../models');

const playerData = [
    {
        player_name: 'Dragon',
        player_race: 'Dragonborn',
        player_class: 'Paladin',
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
        player_name: 'Draco',
        player_race: 'Dragonborn',
        player_class: 'Paladin',
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
        player_name: 'Leroy Jenkins',
        player_race: 'Elf',
        player_class: 'Fighter',
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
        player_name: 'Dwight',
        player_race: 'Gnome',
        player_class: 'Cleric',
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
        player_name: 'Ted',
        player_race: 'Elf',
        player_class: 'Druid',
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