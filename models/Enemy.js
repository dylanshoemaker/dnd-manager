const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Enemy extends Model {}

Enemy.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    },
    // whatever monster data
  }
);





module.exports = Enemy;
