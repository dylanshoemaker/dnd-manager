const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db 'dnd_manager_db', 'root', 'BrandonSanderson04!', process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('dnd_manager_db', 'root', 'BrandonSanderson04!', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;