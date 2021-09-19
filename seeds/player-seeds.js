const { Player } = require('../models');

const playerData = [
    {
        character_name: 'Dragon',
        player_race: 'Dragonborn',
        player_class: 'Paladin',
        level: 1,
        armor_class: 1,
        health: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
        pp: 1
    },
    {
        character_name: 'Draco',
        player_race: 'Dragonborn',
        player_class: 'Paladin',
        level: 1,
        armor_class: 1,
        health: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
        pp: 1
    },
    {
        character_name: 'Leroy Jenkins',
        player_race: 'Elf',
        player_class: 'Fighter',
        level: 1,
        armor_class: 1,
        health: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
        pp: 1
    },
    {
        character_name: 'Dwight',
        player_race: 'Gnome',
        player_class: 'Cleric',
        level: 1,
        armor_class: 1,
        health: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
        pp: 1
    },
    {
        character_name: 'Ted',
        player_race: 'Elf',
        player_class: 'Druid',
        level: 1,
        armor_class: 1,
        health: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
        pp: 1
    },
    {
        character_name: 'Larry',
        player_race: 'Human',
        player_class: 'Ranger',
        level: 1,
        armor_class: 1,
        health: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
        pp: 1
    },
    {
        character_name: 'Merlin',
        player_race: 'Half-Elf',
        player_class: 'Warlock',
        level: 1,
        armor_class: 1,
        health: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
        pp: 1
    },
    {
        character_name: 'Chester',
        player_race: 'Dwarf',
        player_class: 'Monk',
        level: 1,
        armor_class: 1,
        health: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
        pp: 1
    },
    {
        character_name: 'Slick',
        player_race: 'Bard',
        player_class: 'Rogue',
        level: 1,
        armor_class: 1,
        health: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
        pp: 1
    }
<<<<<<< HEAD
    
   
=======
>>>>>>> feature/user-seeds
]

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;