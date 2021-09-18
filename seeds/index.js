const seedUsers = require('./user-seeds');
const seedPlayers = require('./player-seeds');
const seedEnemies = require('./enemy-seeds');
const seedParties = require('./party-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n------ DATABASE SYNCED --------\n');

    await seedUsers();
    console.log('\n------ USERS SEEDED --------\n');

    await seedPlayers();
    console.log('\n------- PLAYERS SEEDED -------\n');

    await seedEnemies();
    console.log('\n------- ENEMIES SEEDED -------\n');

    await seedParties();
    console.log('\n------- PARTIES SEEDED -------\n');
  
    process.exit(0);
  };

  seedAll();