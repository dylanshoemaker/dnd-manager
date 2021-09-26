const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Player extends Model {}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    character_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    player_race: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    player_class: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: -5,
        max: 30
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
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: -5,
        max: 30
      } 
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: -5,
        max: 30
      } 
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: -5,
        max: 30
      } 
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: -5,
        max: 30
      } 
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: -5,
        max: 30
      } 
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: -5,
        max: 30
      } 
    },
    pp: {
      //Passive Perception, get your mind out of the gutter
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: -5,
        max: 30
      } 
    },
    party_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'party',
        key: 'id'
      }  
    }
  },
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'player'
  }
);





module.exports = Player;