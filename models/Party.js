const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Party extends Model {}

Party.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    partyName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'party'
  }
);


module.exports = Party;