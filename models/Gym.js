const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gym extends Model {}

Gym.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'user',
    //         key: 'id'
    //     }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gym',
  }
);

module.exports = Gym;
