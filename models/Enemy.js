const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Enemy extends Model {}

Enemy.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    enemy_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    enemy_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Dragon",
      validate: {
        len: [1]
      }
    },
    armor_class: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'party'
  }
);


module.exports = Enemy;
