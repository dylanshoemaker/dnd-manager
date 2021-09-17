const seedUsers = require('./user-seeds');
const seedPlayers = require('./player-seeds');
const seedParties = require('./party-seeds');
const seedEnemies = require('./enemy-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('------ DATABASE SYNCED --------');

    await seedUsers();
    console.log('------ USERS SEEDED --------');

    await seedPlayers();
    console.log('------- PLAYERS SEEDED -------');

    await seedParties();
    console.log('------- PARTIES SEEDED -------');

    await seedEnemies();
    console.log('------- ENEMIES SEEDED -------');
  
    process.exit(0);
  };

  seedAll();