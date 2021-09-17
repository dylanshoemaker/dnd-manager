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
      unique: true,
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    // whatever monster data
    
    
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
