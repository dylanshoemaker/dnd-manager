const seedUsers = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedUsers();
    console.log('--------------');

    await seedPlayers();
    console.log('--------------');

    await seedParties();
    console.log('--------------');

    await seedMonsters();
    console.log('--------------');
  
    process.exit(0);
  };

  seedAll();